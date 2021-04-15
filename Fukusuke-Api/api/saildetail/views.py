from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import SailDetailSerializer
from django.forms.models import model_to_dict
from .models import SailDetail
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/saildetail-list/',
		'Detail View':'/saildetail-detail/<str:pk>/',
		'Create':'/saildetail-create/',
		'Update':'/saildetail-update/<str:pk>/',
		'Delete':'/saildetail-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def saildetailList(request):
	saildetails = SailDetail.objects.all().order_by('-id')
	serializer = SailDetailSerializer(saildetails, many=True)
	return JsonResponse(list(saildetails.values()), safe=False)

@api_view(['GET'])
def saildetailDetail(request, pk):
	saildetails = SailDetail.objects.get(id=pk)
	serializer = SailDetailSerializer(saildetails, many=False)
	return JsonResponse(model_to_dict(saildetails))


@api_view(['POST'])
def saildetailCreate(request):
	serializer = SailDetailSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def saildetailUpdate(request, pk):
	saildetail = SailDetail.objects.get(id=pk)
	serializer = SailDetailSerializer(saildetail, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def saildetailDelete(request, pk):
	saildetail = SailDetail.objects.get(id=pk)
	saildetail.delete()

	return Response('Item succsesfully delete!')



