# Generated by Django 5.0.6 on 2024-07-11 23:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0004_auto_20240711_1515'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='genre',
            field=models.CharField(default='Python', max_length=100),
        ),
    ]
