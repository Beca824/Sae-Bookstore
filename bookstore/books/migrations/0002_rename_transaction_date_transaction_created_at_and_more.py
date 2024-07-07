# Generated by Django 5.0.6 on 2024-07-04 21:24

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='transaction_date',
            new_name='created_at',
        ),
        migrations.RemoveField(
            model_name='cart',
            name='added_date',
        ),
        migrations.AddField(
            model_name='cart',
            name='added_on',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
        migrations.AlterField(
            model_name='transaction',
            name='transaction_type',
            field=models.CharField(choices=[('credit', 'Credit'), ('cash', 'Cash')], max_length=6),
        ),
    ]
