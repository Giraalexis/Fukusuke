from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SexSerializer
from django.forms.models import model_to_dict
from .models import Sex
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/sex-list/',
		'Detail View':'/sex-detail/<str:pk>/',
		'Create':'/sex-create/',
		'Update':'/sex-update/<str:pk>/',
		'Delete':'/sex-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def sexList(request):
	sexs = Sex.objects.all().order_by('-id')
	serializer = SexSerializer(sexs, many=True)
	return JsonResponse(list(sexs.values()), safe=False)

@api_view(['GET'])
def sexDetail(request, pk):
	sexs = Sex.objects.get(id=pk)
	serializer = SexSerializer(sexs, many=False)
	return JsonResponse(model_to_dict(sexs))


@api_view(['POST'])
def sexCreate(request):
	serializer = SexSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def sexUpdate(request, pk):
	sex = Sex.objects.get(id=pk)
	serializer = SexSerializer(sex, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def sexDelete(request, pk):
	sex = Sex.objects.get(id=pk)
	sex.delete()

	return Response('Item succsesfully delete!')



