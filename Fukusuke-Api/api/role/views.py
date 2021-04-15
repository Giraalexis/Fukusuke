from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import RoleSerializer
from django.forms.models import model_to_dict
from .models import Role
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/role-list/',
		'Detail View':'/role-detail/<str:pk>/',
		'Create':'/role-create/',
		'Update':'/role-update/<str:pk>/',
		'Delete':'/role-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def roleList(request):
	roles = Role.objects.all().order_by('-id')
	serializer = RoleSerializer(roles, many=True)
	return JsonResponse(list(roles.values()), safe=False)

@api_view(['GET'])
def roleDetail(request, pk):
	roles = Role.objects.get(id=pk)
	serializer = RoleSerializer(roles, many=False)
	return JsonResponse(model_to_dict(roles))


@api_view(['POST'])
def roleCreate(request):
	serializer = RoleSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()

	return Response(serializer.data)

@api_view(['PUT'])
def roleUpdate(request, pk):
	role = Role.objects.get(id=pk)
	serializer = RoleSerializer(role, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def roleDelete(request, pk):
	role = Role.objects.get(id=pk)
	role.delete()

	return Response('Item succsesfully delete!')



