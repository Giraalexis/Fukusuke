from api.region.models import Region
from django.db import models

# Create your models here.

class Province(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=50)
    region = models.ForeignKey(Region, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name