from rest_framework import serializers
from backend.models import Guests

class GuestSerializer(serializers.ModelSerializer):
    class Meta:
        model = Guests
        fields = [
            "id", 
            "name", 
            "email"
            ]
class EmailSerializer(serializers.Serializer):
    email = serializers.EmailField()

class DateSerializer(serializers.Serializer):
    date = serializers.CharField()