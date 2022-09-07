from unicodedata import decimal
from django.db import models

# Create your models here.
class Cart(models.Model):
    productId = models.CharField(null=True, blank=True, max_length=50)
    customerId = models.CharField(null=True, blank=True, max_length=50)
    quantity = models.DecimalField(null=True, blank=True, decimal_places=2, max_digits=100000)