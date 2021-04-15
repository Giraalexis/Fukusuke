from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ProductSerializer
from django.forms.models import model_to_dict
from .models import Product
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/product-list/',
		'Detail View':'/product-detail/<str:pk>/',
		'Create':'/product-create/',
		'Update':'/product-update/<str:pk>/',
		'Delete':'/product-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def productList(request):
	products = Product.objects.all().order_by('-id')
	serializer = ProductSerializer(products, many=True)
	return JsonResponse(list(products.values()), safe=False)

@api_view(['GET'])
def productDetail(request, pk):
	products = Product.objects.get(id=pk)
	serializer = ProductSerializer(products, many=False)
	return JsonResponse(model_to_dict(products))


@api_view(['POST'])
def productCreate(request):
	serializer = ProductSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def productUpdate(request, pk):
	product = Product.objects.get(id=pk)
	serializer = ProductSerializer(product, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def productDelete(request, pk):
	product = Product.objects.get(id=pk)
	product.delete()

	return Response('Item succsesfully delete!')



