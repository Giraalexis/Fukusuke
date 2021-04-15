from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('commune-list', views.communeList, name="commune-list"),
	path('commune-detail/<str:pk>', views.communeDetail, name="commune-detail"),
	path('commune-create', views.communeCreate, name="commune-create"),

	path('commune-update/<str:pk>', views.communeUpdate, name="commune-update"),
	path('commune-delete/<str:pk>', views.communeDelete, name="commune-delete"),
]
