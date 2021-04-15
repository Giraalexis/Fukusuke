from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PaymentSerializer
from django.forms.models import model_to_dict
from .models import Payment
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/payment-list/',
		'Detail View':'/payment-detail/<str:pk>/',
		'Create':'/payment-create/',
		'Update':'/payment-update/<str:pk>/',
		'Delete':'/payment-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def paymentList(request):
	payments = Payment.objects.all().order_by('-id')
	serializer = PaymentSerializer(payments, many=True)
	return JsonResponse(list(payments.values()), safe=False)

@api_view(['GET'])
def paymentDetail(request, pk):
	payments = Payment.objects.get(id=pk)
	serializer = PaymentSerializer(payments, many=False)
	return JsonResponse(model_to_dict(payments))


@api_view(['POST'])
def paymentCreate(request):
	serializer = PaymentSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def paymentUpdate(request, pk):
	payment = Payment.objects.get(id=pk)
	serializer = PaymentSerializer(payment, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def paymentDelete(request, pk):
	payment = Payment.objects.get(id=pk)
	payment.delete()

	return Response('Item succsesfully delete!')



