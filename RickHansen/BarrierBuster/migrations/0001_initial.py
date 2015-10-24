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
                ('comment', models.CharField(max_length=500)),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('image', models.ImageField(upload_to=b'static/images/')),
            ],
        ),
        migrations.CreateModel(
            name='Pin',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('tag', models.CharField(default=b'Accessible Path', max_length=50, choices=[(b'Curb Cut', b'Curb Cut'), (b'Sidewalk', b'Sidewalk'), (b'Accessible Path', b'Accessible Path'), (b'Transit', b'Transit'), (b'Food', b'Food'), (b'Music', b'Music'), (b'Networking', b'Networking'), (b'Party', b'Party'), (b'Sport', b'Sport'), (b'Wine', b'Wine'), (b'Others', b'Others')])),
                ('status', models.CharField(default=b'Barrier', max_length=20, choices=[(b'Barrier', b'Barrier'), (b'In Progress', b'In Progress'), (b'Resolved', b'Resolved'), (b'Best Practice', b'Best Practice')])),
                ('description', models.CharField(max_length=500, null=True, blank=True)),
                ('date_created', models.DateField()),
                ('date_updated', models.DateField(blank=True)),
                ('location_latitude', models.FloatField()),
                ('location_longitude', models.FloatField()),
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
