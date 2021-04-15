from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProvinceSerializer
from django.forms.models import model_to_dict
from .models import Province
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/province-list/',
		'Detail View':'/province-detail/<str:pk>/',
		'Create':'/province-create/',
		'Update':'/province-update/<str:pk>/',
		'Delete':'/province-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def provinceList(request):
	provinces = Province.objects.all().order_by('-id')
	serializer = ProvinceSerializer(provinces, many=True)
	return JsonResponse(list(provinces.values()), safe=False)

@api_view(['GET'])
def provinceDetail(request, pk):
	provinces = Province.objects.get(id=pk)
	serializer = ProvinceSerializer(provinces, many=False)
	return JsonResponse(model_to_dict(provinces))


@api_view(['POST'])
def provinceCreate(request):
	serializer = ProvinceSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def provinceUpdate(request, pk):
	province = Province.objects.get(id=pk)
	serializer = ProvinceSerializer(province, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def provinceDelete(request, pk):
	province = Province.objects.get(id=pk)
	province.delete()

	return Response('Item succsesfully delete!')



