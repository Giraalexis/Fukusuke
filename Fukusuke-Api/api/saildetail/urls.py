from django.urls import path
from . import views

urlpatterns = [
	path('', views.apiOverview, name="api-overview"),
	path('saildetail-list', views.saildetailList, name="saildetail-list"),
	path('saildetail-detail/<str:pk>', views.saildetailDetail, name="saildetail-detail"),
	path('saildetail-create', views.saildetailCreate, name="saildetail-create"),

	path('saildetail-update/<str:pk>', views.saildetailUpdate, name="saildetail-update"),
	path('saildetail-delete/<str:pk>', views.saildetailDelete, name="saildetail-delete"),
]
