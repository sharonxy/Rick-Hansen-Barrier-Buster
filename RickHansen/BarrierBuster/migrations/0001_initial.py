# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('comment', models.TextField(max_length=500, null=True, blank=True)),
                ('date', models.DateTimeField(null=True, blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(null=True, upload_to=b'static/images/', blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Pin',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('tag', models.CharField(default=b'Accessible Path', max_length=50, choices=[(b'Curb Cut', b'Curb Cut'), (b'Sidewalk', b'Sidewalk'), (b'Accessible Path', b'Accessible Path'), (b'Transit', b'Transit'), (b'Public Elevator', b'Public Elevator'), (b'Accessible Washroom', b'Accessible Washroom'), (b'Customer Service', b'Customer Service'), (b'Accessible Entrance', b'Accessible Entrance'), (b'Automatic Door', b'Automatic Door'), (b'Traffic Light Timing', b'Traffic Light Timing'), (b'Traffic Light Low Sound', b'Traffic Light Low Sound'), (b'Accessible Parking', b'Accessible Parking'), (b'Establishment Policy', b'Establishment Policy'), (b'Other', b'Other')])),
                ('status', models.CharField(default=b'Barrier', max_length=20, choices=[(b'Barrier', b'Barrier'), (b'In Progress', b'In Progress'), (b'Resolved', b'Resolved'), (b'Best Practice', b'Best Practice')])),
                ('description', models.TextField(max_length=500, null=True, blank=True)),
                ('date_created', models.DateTimeField(null=True, blank=True)),
                ('date_updated', models.DateTimeField(null=True, blank=True)),
                ('address', models.TextField(max_length=500, null=True, blank=True)),
                ('location_latitude', models.FloatField()),
                ('location_longitude', models.FloatField()),
                ('img', models.ImageField(null=True, upload_to=b'static/images/', blank=True)),
            ],
        ),
        migrations.AddField(
            model_name='image',
            name='pin',
            field=models.ForeignKey(to='BarrierBuster.Pin'),
        ),
        migrations.AddField(
            model_name='comment',
            name='pin',
            field=models.ForeignKey(to='BarrierBuster.Pin'),
        ),
    ]
