# Generated by Django 3.2.14 on 2022-08-02 20:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0002_auto_20220802_1507'),
    ]

    operations = [
        migrations.CreateModel(
            name='Date',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField()),
            ],
        ),
        migrations.AlterField(
            model_name='guests',
            name='key',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
