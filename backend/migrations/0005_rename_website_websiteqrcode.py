# Generated by Django 3.2.14 on 2022-08-03 16:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0004_website'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Website',
            new_name='WebsiteQrCode',
        ),
    ]
