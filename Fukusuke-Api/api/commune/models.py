from api.province.models import Province
from django.db import models

# Create your models here.
class Commune(models.Model):
    id = models.AutoField(primary_key = True)
    name = models.CharField(max_length=50)
    province = models.ForeignKey(Province, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.name