from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import EmployeeSerializer
from django.forms.models import model_to_dict
from .models import Employee
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/employee-list/',
		'Detail View':'/employee-detail/<str:pk>/',
		'Create':'/employee-create/',
		'Update':'/employee-update/<str:pk>/',
		'Delete':'/employee-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def employeeList(request):
	employees = Employee.objects.all().order_by('-id')
	serializer = EmployeeSerializer(employees, many=True)
	return JsonResponse(list(employees.values()), safe=False)

@api_view(['GET'])
def employeeDetail(request, pk):
	employees = Employee.objects.get(id=pk)
	serializer = EmployeeSerializer(employees, many=False)
	return JsonResponse(model_to_dict(employees))


@api_view(['POST'])
def employeeCreate(request):
	serializer = EmployeeSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def employeeUpdate(request, pk):
	employee = Employee.objects.get(id=pk)
	serializer = EmployeeSerializer(employee, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def employeeDelete(request, pk):
	employee = Employee.objects.get(id=pk)
	employee.delete()

	return Response('Item succsesfully delete!')



