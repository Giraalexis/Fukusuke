from api.products.models import Product
from django.db import models
from api.ticket.models import Ticket
# Create your models here.

class SailDetail(models.Model):
    name = models.CharField(max_length=50)
    amout = models.IntegerField()
    sub_total = models.IntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    ticket = models.ForeignKey(Ticket, on_delete=models.CASCADE)

    def __str__(self):
        return self.name