# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('BarrierBuster', '0003_auto_20151024_0154'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='comment',
            field=models.TextField(max_length=500, null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='comment',
            name='date',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='date_created',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='date_updated',
            field=models.DateTimeField(null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='description',
            field=models.TextField(max_length=500, null=True, blank=True),
        ),
        migrations.AlterField(
            model_name='pin',
            name='tag',
            field=models.CharField(default=b'Accessible Path', max_length=50, choices=[(b'Curb Cut', b'Curb Cut'), (b'Sidewalk', b'Sidewalk'), (b'Accessible Path', b'Accessible Path')]),
        ),
    ]
