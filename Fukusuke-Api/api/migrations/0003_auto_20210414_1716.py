# Generated by Django 3.1.2 on 2021-04-14 21:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20210412_0100'),
    ]

    operations = [
        migrations.AlterField(
            model_name='client',
            name='rut',
            field=models.CharField(max_length=25),
        ),
    ]
