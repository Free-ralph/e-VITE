from PIL import Image, ImageDraw
import qrcode
from io import BytesIO
from django.core.files import File
from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Guests(models.Model):
    name = models.CharField(max_length=120)
    email = models.EmailField(unique=True)
    key = models.CharField(max_length=200, null = True, blank = True)
    class Meta:
        verbose_name_plural = 'Guests'

    def __str__(self):
        return self.name

class Date(models.Model):
    date = models.DateTimeField()

    def __str__(self):
        return str(self.date)

class WebsiteQrCode(models.Model):
    name = models.URLField()
    qr_code = models.ImageField(upload_to = 'qr_codes', blank = True)

    def save(self, *args, **kwargs):
        # make a qr_Code on the basis of the name of the website
        qrcode_img = qrcode.make(self.name)
        # Draw up a canvas with the coloschem, dimensions, and color passed in
        canvas = Image.new('RGB', (360, 360), 'white')
        draw = ImageDraw.Draw(canvas)
        # paste the qr_code image on the canvas
        canvas.paste(qrcode_img)
        # name the new file you're creating and save it
        fname = f'qr_code.png'
        buffer = BytesIO()
        canvas.save(buffer, 'PNG')
        self.qr_code.save(fname, File(buffer), save = False)
        canvas.close()
        super().save(*args, **kwargs)

    