from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('client-list', views.clientList, name="client-list"),
	path('client-detail/<str:pk>', views.clientDetail, name="client-detail"),
	path('client-create', views.clientCreate, name="client-create"),

	path('client-update/<str:pk>', views.clientUpdate, name="client-update"),
	path('client-delete/<str:pk>', views.clientDelete, name="client-delete"),

	path('client-search-email/<str:email>', views.clientSearchEmail,name="client-search-email"),
	path('client-send-payed/<str:pk>', views.clientSendPayed, name="client-send-payed")
]
