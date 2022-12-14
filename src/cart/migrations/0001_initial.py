# Generated by Django 4.1 on 2022-09-02 22:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productId', models.CharField(blank=True, max_length=50, null=True)),
                ('customerId', models.CharField(blank=True, max_length=50, null=True)),
                ('quantity', models.DecimalField(blank=True, decimal_places=2, max_digits=100000, null=True)),
            ],
        ),
    ]
