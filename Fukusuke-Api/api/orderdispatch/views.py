from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import OrderdispatchSerializer
from django.forms.models import model_to_dict
from .models import Orderdispatch
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/orderdispatch-list/',
		'Detail View':'/orderdispatch-detail/<str:pk>/',
		'Create':'/orderdispatch-create/',
		'Update':'/orderdispatch-update/<str:pk>/',
		'Delete':'/orderdispatch-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def orderdispatchList(request):
	orderdispatchs = Orderdispatch.objects.all().order_by('-id')
	serializer = OrderdispatchSerializer(orderdispatchs, many=True)
	return JsonResponse(list(orderdispatchs.values()), safe=False)

@api_view(['GET'])
def orderdispatchDetail(request, pk):
	orderdispatchs = Orderdispatch.objects.get(id=pk)
	serializer = OrderdispatchSerializer(orderdispatchs, many=False)
	return JsonResponse(model_to_dict(orderdispatchs))


@api_view(['POST'])
def orderdispatchCreate(request):
	serializer = OrderdispatchSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def orderdispatchUpdate(request, pk):
	orderdispatch = Orderdispatch.objects.get(id=pk)
	serializer = OrderdispatchSerializer(orderdispatch, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def orderdispatchDelete(request, pk):
	orderdispatch = Orderdispatch.objects.get(id=pk)
	orderdispatch.delete()

	return Response('Item succsesfully delete!')



