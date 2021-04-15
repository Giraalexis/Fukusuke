from api.ticket.models import Ticket
from django.db import models

# Create your models here.

class Orderdispatch(models.Model):
    adress = models.CharField(max_length=50)      
    state = models.BooleanField()
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)

    def __str__(self):
        return self.name