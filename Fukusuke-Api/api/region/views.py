from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RegionSerializer
from django.forms.models import model_to_dict
from .models import Region
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/region-list/',
		'Detail View':'/region-detail/<str:pk>/',
		'Create':'/region-create/',
		'Update':'/region-update/<str:pk>/',
		'Delete':'/region-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def regionList(request):
	regions = Region.objects.all().order_by('-id')
	serializer = RegionSerializer(regions, many=True)
	return JsonResponse(list(regions.values()), safe=False)

@api_view(['GET'])
def regionDetail(request, pk):
	regions = Region.objects.get(id=pk)
	serializer = RegionSerializer(regions, many=False)
	return JsonResponse(model_to_dict(regions))


@api_view(['POST'])
def regionCreate(request):
	serializer = RegionSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def regionUpdate(request, pk):
	region = Region.objects.get(id=pk)
	serializer = RegionSerializer(region, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def regionDelete(request, pk):
	region = Region.objects.get(id=pk)
	region.delete()

	return Response('Item succsesfully delete!')



