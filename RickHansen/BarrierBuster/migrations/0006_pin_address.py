# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0005_auto_20151024_1459'),
    ]

    operations = [
        migrations.AddField(
            model_name='pin',
            name='address',
            field=models.TextField(max_length=500, null=True, blank=True),
        ),
    ]
