# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2018-03-25 18:56
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import filer.fields.image


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.FILER_IMAGE_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Your',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('your_name', models.CharField(max_length=50)),
                ('your_direction', models.CharField(max_length=50)),
                ('your_people', models.CharField(blank=True, max_length=70)),
                ('your_peopleurl', models.CharField(blank=True, max_length=120)),
                ('your_year_of_foundation', models.CharField(blank=True, max_length=4)),
                ('your_description', models.TextField(blank=True)),
                ('your_site', models.CharField(blank=True, max_length=120)),
                ('your_facebook', models.CharField(blank=True, max_length=120)),
                ('your_instagram', models.CharField(blank=True, max_length=120)),
                ('your_twitter', models.CharField(blank=True, max_length=120)),
                ('your_youtube', models.CharField(blank=True, max_length=120)),
                ('your_pinterest', models.CharField(blank=True, max_length=120)),
                ('your_flickr', models.CharField(blank=True, max_length=120)),
                ('your_cover', filer.fields.image.FilerImageField(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='your_covers', to=settings.FILER_IMAGE_MODEL)),
            ],
            options={
                'db_table': 'yours',
            },
        ),
    ]
