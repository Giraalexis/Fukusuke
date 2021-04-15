from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('orderdispatch-list', views.orderdispatchList, name="orderdispatch-list"),
	path('orderdispatch-detail/<str:pk>', views.orderdispatchDetail, name="orderdispatch-detail"),
	path('orderdispatch-create', views.orderdispatchCreate, name="orderdispatch-create"),

	path('orderdispatch-update/<str:pk>', views.orderdispatchUpdate, name="orderdispatch-update"),
	path('orderdispatch-delete/<str:pk>', views.orderdispatchDelete, name="orderdispatch-delete"),
]
