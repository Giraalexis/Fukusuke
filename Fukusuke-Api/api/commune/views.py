from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import CommuneSerializer
from django.forms.models import model_to_dict
from .models import Commune
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/commune-list/',
		'Detail View':'/commune-detail/<str:pk>/',
		'Create':'/commune-create/',
		'Update':'/commune-update/<str:pk>/',
		'Delete':'/commune-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def communeList(request):
	communes = Commune.objects.all().order_by('-id')
	serializer = CommuneSerializer(communes, many=True)
	return JsonResponse(list(communes.values()), safe=False)

@api_view(['GET'])
def communeDetail(request, pk):
	communes = Commune.objects.get(id=pk)
	serializer = CommuneSerializer(communes, many=False)
	return JsonResponse(model_to_dict(communes))


@api_view(['POST'])
def communeCreate(request):
	serializer = CommuneSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def communeUpdate(request, pk):
	commune = Commune.objects.get(id=pk)
	serializer = CommuneSerializer(commune, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def communeDelete(request, pk):
	commune = Commune.objects.get(id=pk)
	commune.delete()

	return Response('Item succsesfully delete!')



