# Generated by Django 2.1.3 on 2018-12-04 23:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('podcasts', '0003_auto_20181204_1411'),
    ]

    operations = [
        migrations.AddField(
            model_name='podcast',
            name='year',
            field=models.IntegerField(blank=True, default=2018, null=True),
        ),
    ]
