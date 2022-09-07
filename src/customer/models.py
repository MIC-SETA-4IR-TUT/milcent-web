from django.db import models

# Create your models here.
class Customer(models.Model):
   firstname = models.TextField()
   lastname = models.TextField()
   email = models.TextField()
   password = models.TextField()
