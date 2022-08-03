# Generated by Django 3.2.14 on 2022-08-03 16:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0003_auto_20220802_2137'),
    ]

    operations = [
        migrations.CreateModel(
            name='Website',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.URLField()),
                ('qr_code', models.ImageField(blank=True, upload_to='qr_codes')),
            ],
        ),
    ]
