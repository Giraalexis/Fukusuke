# Generated by Django 3.1.2 on 2021-04-17 23:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20210414_1921'),
    ]

    operations = [
        migrations.AlterField(
            model_name='employee',
            name='rut',
            field=models.CharField(max_length=25),
        ),
    ]
