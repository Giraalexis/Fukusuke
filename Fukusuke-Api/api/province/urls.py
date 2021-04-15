from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('province-list', views.provinceList, name="province-list"),
	path('province-detail/<str:pk>', views.provinceDetail, name="province-detail"),
	path('province-create', views.provinceCreate, name="province-create"),

	path('province-update/<str:pk>', views.provinceUpdate, name="province-update"),
	path('province-delete/<str:pk>', views.provinceDelete, name="province-delete"),
]
