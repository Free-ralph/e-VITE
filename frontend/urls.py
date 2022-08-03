from re import template
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
app_name = 'frontend'
urlpatterns = [
    path('', TemplateView.as_view(template_name = 'index.html'), name = 'home'),
    path('guests/', TemplateView.as_view(template_name = 'index.html'), name = 'guests'),
    path('program/', TemplateView.as_view(template_name = 'index.html'), name = 'program'),
    path('qr-code/', TemplateView.as_view(template_name = 'index.html'), name = 'qr-code'),
    path('rsvp/', TemplateView.as_view(template_name = 'index.html'), name = 'rsvp'),
    path('check-reservation/', TemplateView.as_view(template_name = 'index.html'), name = 'check-reservation'),
    ]

urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT )
urlpatterns += static(settings.STATIC_URL, document_root = settings.STATIC_ROOT )