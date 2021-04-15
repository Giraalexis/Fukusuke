from api.payment.models import Payment
from api.client.models import Client
from api.employee.models import Employee
from django.db import models

# Create your models here.

class Ticket(models.Model):
    fecha = models.DateField()
    total = models.IntegerField()
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    payment = models.ForeignKey(Payment, on_delete=models.CASCADE)

    def __str__(self):
        return self.name