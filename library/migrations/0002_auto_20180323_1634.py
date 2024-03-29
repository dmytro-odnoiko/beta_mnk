# -*- coding: utf-8 -*-
# Generated by Django 1.10.7 on 2018-03-23 14:34
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion
import filer.fields.file


class Migration(migrations.Migration):

    dependencies = [
        ('library', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='book',
            name='book_file',
            field=filer.fields.file.FilerFileField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='book', to='filer.File'),
        ),
        migrations.AlterField(
            model_name='book',
            name='book_review',
            field=models.TextField(blank=True),
        ),
    ]
