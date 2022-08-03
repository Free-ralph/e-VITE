from django.urls import path
from .view import GuestsApiView, GuestCreateApiView, GetGuestApi, LoginGuestApiView, GetDateApiView

app_name = 'api'
urlpatterns = [
    path('guests/', GuestsApiView.as_view(), name = 'guests'),
    path('add-guest/', GuestCreateApiView.as_view(), name = 'add-guest'),
    path('get-guest/<pk>/', GetGuestApi.as_view(), name = 'get-guest'),
    path('login-guest/', LoginGuestApiView.as_view(), name = 'login-guest'),
    path('wedding-date/', GetDateApiView.as_view(), name = 'wedding-date'),
    ]
