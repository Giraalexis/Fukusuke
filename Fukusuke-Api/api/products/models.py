from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=50)
    promotion = models.BooleanField()
    stock = models.IntegerField()
    price = models.IntegerField()
    state = models.BooleanField()
    image = models.CharField(max_length=250)
      
    def __str__(self):
        return self.name