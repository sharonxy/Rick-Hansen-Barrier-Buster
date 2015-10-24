# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0007_image_pin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='image',
            name='pin',
        ),
    ]
