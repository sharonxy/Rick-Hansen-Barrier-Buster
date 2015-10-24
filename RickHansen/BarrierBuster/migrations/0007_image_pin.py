# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import datetime
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0006_pin_address'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='pin',
            field=models.ForeignKey(default=datetime.datetime(2015, 10, 24, 21, 57, 0, 666298, tzinfo=utc), to='BarrierBuster.Pin'),
            preserve_default=False,
        ),
    ]
