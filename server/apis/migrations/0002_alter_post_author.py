# Generated by Django 4.1.3 on 2022-11-25 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='author',
            field=models.CharField(default='admin', max_length=255, verbose_name='ชื่อผู้แต่งบทความ'),
        ),
    ]