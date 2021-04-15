from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('payment-list', views.paymentList, name="payment-list"),
	path('payment-detail/<str:pk>', views.paymentDetail, name="payment-detail"),
	path('payment-create', views.paymentCreate, name="payment-create"),

	path('payment-update/<str:pk>', views.paymentUpdate, name="payment-update"),
	path('payment-delete/<str:pk>', views.paymentDelete, name="payment-delete"),
]
