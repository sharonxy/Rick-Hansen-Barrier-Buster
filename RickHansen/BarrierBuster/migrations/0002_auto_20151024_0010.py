# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pin',
            name='date_created',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='pin',
            name='date_updated',
            field=models.DateTimeField(blank=True),
        ),
    ]
