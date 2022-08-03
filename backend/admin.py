from django.contrib import admin
from .models import Guests, Date, WebsiteQrCode
# Register your models here.




admin.site.register(Guests)
admin.site.register(Date)
admin.site.register(WebsiteQrCode)