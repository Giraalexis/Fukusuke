from django.contrib import admin

# Register your models here.

from .client.models import Client
from .employee.models import Employee
from .commune.models import Commune
from .province.models import Province
from .region.models import Region
from .orderdispatch.models import Orderdispatch
from .payment.models import Payment
from .products.models import Product
from .role.models import Role
from .saildetail.models import SailDetail
from .ticket.models import Ticket
from .sex.models import Sex

admin.site.register(Commune)
admin.site.register(Province)
admin.site.register(Region)
admin.site.register(Client)
admin.site.register(Employee)
admin.site.register(Orderdispatch)
admin.site.register(Payment)
admin.site.register(Product)
admin.site.register(Role)
admin.site.register(SailDetail)
admin.site.register(Ticket)
admin.site.register(Sex)