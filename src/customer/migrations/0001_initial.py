# Generated by Django 4.1 on 2022-08-22 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.TextField()),
                ('lastname', models.TextField()),
                ('email', models.TextField()),
                ('password', models.TextField()),
            ],
        ),
    ]
