from django.db import models

# Create your models here.
class Product(models.Model):
   category = models.CharField(null=True, blank=True, max_length=20)
   brand = models.CharField(null=True, blank=True, max_length=50)
   name = models.CharField(null=True, blank=True, max_length=120)
   price = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=100000)
   thumbnail = models.ImageField(null=True, blank=True, upload_to="images/")
   description = models.TextField(null=True, blank=True, )


