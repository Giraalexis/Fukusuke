from api.role.models import Role
from api.commune.models import Commune
from api.sex.models import Sex
from django.db import models

# Create your models here.

class Employee(models.Model):
    name = models.CharField(max_length=50)
    rut = models.CharField(max_length=25)
    date_burn = models.DateField()
    telphone = models.IntegerField()
    email = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    state = models.BooleanField()
    sex = models.ForeignKey(Sex, on_delete=models.CASCADE) 
    commune = models.ForeignKey(Commune, on_delete=models.CASCADE)
    role = models.ForeignKey(Role, on_delete=models.CASCADE)

    def __str__(self):
        return self.name