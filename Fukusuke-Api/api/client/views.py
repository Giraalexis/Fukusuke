from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import ClientSerializer
from django.forms.models import model_to_dict
from .models import Client
from django.core.mail import EmailMessage

# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/client-list/',
		'Detail View':'/client-detail/<str:pk>/',
		'Create':'/client-create/',
		'Update':'/client-update/<str:pk>/',
		'Delete':'/client-delete/<str:pk>/',
		'Search Email': '/client-search-email/<str:email>/'
		}

	return Response(api_urls)

@api_view(['GET'])
def clientList(request):
	clients = Client.objects.all().order_by('-id')
	serializer = ClientSerializer(clients, many=True)
	return JsonResponse(list(clients.values()), safe=False)

@api_view(['GET'])
def clientDetail(request, pk):
	clients = Client.objects.get(id=pk)
	serializer = ClientSerializer(clients, many=False)
	return JsonResponse(model_to_dict(clients))

@api_view(['GET'])
def clientSearchEmail(request, email):
	clients = Client.objects.get(email=email)
	serializer = ClientSerializer(clients, many=False)
	return JsonResponse(model_to_dict(clients))

@api_view(['POST'])
def clientCreate(request):
	serializer = ClientSerializer(data=request.data)

	if serializer.is_valid():
		serializer.save()
		#enviar correo de prueba
		nombre = serializer.data.get("name",'')
		correo = serializer.data.get("email",'')
		link = "168.138.144.35:3000/confirm/"+ str(serializer.data.get("id",''))
		email = EmailMessage("Confirma cuenta Fukusuke",
            "Estimado {}, Ingrese al siguiente enlace para confirmar su cuenta {}".format(nombre,link),
            "gameduoc123@gmail.com",
            ['gameduoc123@gmail.com',correo],
            reply_to=[correo])
		email.send()

	return Response(serializer.data)

@api_view(['PUT'])
def clientUpdate(request, pk):
	client = Client.objects.get(id=pk)
	serializer = ClientSerializer(client, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def clientDelete(request, pk):
	client = Client.objects.get(id=pk)
	client.delete()

	return Response('Item succsesfully delete!')



