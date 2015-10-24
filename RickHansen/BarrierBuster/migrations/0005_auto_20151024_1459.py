# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0004_auto_20151024_1441'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='pin',
        ),
        migrations.AddField(
            model_name='pin',
            name='img',
            field=models.ImageField(null=True, upload_to=b'static/images/', blank=True),
        ),
        migrations.AlterField(
            model_name='image',
            name='image',
            field=models.ImageField(null=True, upload_to=b'static/images/', blank=True),
        ),
    ]
