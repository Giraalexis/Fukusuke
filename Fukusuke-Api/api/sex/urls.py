from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('sex-list', views.sexList, name="sex-list"),
	path('sex-detail/<str:pk>', views.sexDetail, name="sex-detail"),
	path('sex-create', views.sexCreate, name="sex-create"),

	path('sex-update/<str:pk>', views.sexUpdate, name="sex-update"),
	path('sex-delete/<str:pk>', views.sexDelete, name="sex-delete"),
]
