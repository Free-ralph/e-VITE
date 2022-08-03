from backend.models import Guests, Date
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import GuestSerializer, EmailSerializer, DateSerializer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView, GenericAPIView
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.response import Response
import datetime

class GuestsApiView(ListAPIView):
    queryset = Guests.objects.all()
    serializer_class = GuestSerializer

class GuestCreateApiView(CreateAPIView):
    serializer_class = GuestSerializer

    def perform_create(self, serializer):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()
        key = self.request.session.session_key
        serializer.save(key = key)

class GetGuestApi(RetrieveAPIView):
    queryset = Guests.objects.all()
    serializer_class = GuestSerializer

    def retrieve(self, request, *args, **kwargs):
        key = request.session.session_key
        if key :
            try:
                guest_obj = Guests.objects.get(key = key)
            except ObjectDoesNotExist as e:
                return Response({})
            serializer = self.get_serializer(guest_obj)
            return Response(serializer.data)
        return Response({})

class LoginGuestApiView(GenericAPIView):
    '''
        This view handles Login requests from teh client, it verifies the email and logs in or returns 
        an error otherwise
    '''
    queryset = Guests.objects.all()
    serializer_class = EmailSerializer
    def post(self, request, *args, **kwargs):
        email_serializer = self.get_serializer(data = request.data)
        if email_serializer.is_valid():
            email = email_serializer.validated_data['email']
        else:
            return Response(email_serializer.errors)

        try:
            guest_obj = Guests.objects.get(email = email)
        except ObjectDoesNotExist as e:
            return Response({'email' : 'Guest with this email does not exist' })
        if not request.session.exists(request.session.session_key):
            request.session.create()
        guest_obj.key = request.session.session_key
        
        guest_serializer = GuestSerializer(guest_obj)
        return Response(guest_serializer.data)
        
        


# fuction view eqiuvalrnt
# @api_view([GET, ])
# def get_guest_api_view(request, pk):
#     try:
#         guest_obj = Guests.objects.get(id = pk)
#     except ObjectDoesNotExist as e:
#         data = {'error' : f'{e}'}
#         status_code = status.HTTP_404_NOT_FOUND
#     else : 
#         serializer = GuestSerializer(guest_obj)
#         status_code = status.HTTP_200_OK
#         data = serializer.data

#     return Response(data, status=status_code)

        
class GetDateApiView(GenericAPIView):
    def get(self, request, *args, **kwargs):   

        date_now = datetime.datetime.now()
        date_db_obj = Date.objects.first()
        if date_now >= date_db_obj.date:
            date_db_obj.date = date_now
            date_db_obj.save()

        serializer = DateSerializer({'date' : (date_db_obj.date.isoformat() + 'Z')})
        return Response(serializer.data)


