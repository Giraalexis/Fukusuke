from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    #path('api/', include('api.urls')),
    path('api/', include('api.client.urls')),
    path('api/', include('api.employee.urls')),
    path('api/', include('api.commune.urls')),
    path('api/', include('api.province.urls')),
    path('api/', include('api.region.urls')),
    path('api/', include('api.orderdispatch.urls')),
    path('api/', include('api.payment.urls')),
    path('api/', include('api.products.urls')),
    path('api/', include('api.role.urls')),
    path('api/', include('api.sex.urls')),
    path('api/', include('api.saildetail.urls')),
    path('api/', include('api.ticket.urls'))
]
