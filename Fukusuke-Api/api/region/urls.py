from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('region-list', views.regionList, name="region-list"),
	path('region-detail/<str:pk>', views.regionDetail, name="region-detail"),
	path('region-create', views.regionCreate, name="region-create"),

	path('region-update/<str:pk>', views.regionUpdate, name="region-update"),
	path('region-delete/<str:pk>', views.regionDelete, name="region-delete"),
]
