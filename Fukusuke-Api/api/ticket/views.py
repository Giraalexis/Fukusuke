from django.shortcuts import render
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import TicketSerializer
from django.forms.models import model_to_dict
from .models import Ticket
# Create your views here.

@api_view(['GET'])
def apiOverview(request):
	api_urls = {
		'List':'/ticket-list/',
		'Detail View':'/ticket-detail/<str:pk>/',
		'Create':'/ticket-create/',
		'Update':'/ticket-update/<str:pk>/',
		'Delete':'/ticket-delete/<str:pk>/',
		}

	return Response(api_urls)

@api_view(['GET'])
def ticketList(request):
	tickets = Ticket.objects.all().order_by('-id')
	serializer = TicketSerializer(tickets, many=True)
	return JsonResponse(list(tickets.values()), safe=False)

@api_view(['GET'])
def ticketDetail(request, pk):
	tickets = Ticket.objects.get(id=pk)
	serializer = TicketSerializer(tickets, many=False)
	return JsonResponse(model_to_dict(tickets))


@api_view(['POST'])
def ticketCreate(request):
	serializer = TicketSerializer(data=request.data)
	if serializer.is_valid():
		serializer.save()
	return Response(serializer.data)

@api_view(['PUT'])
def ticketUpdate(request, pk):
	ticket = Ticket.objects.get(id=pk)
	serializer = TicketSerializer (ticket, data=request.data)
	if serializer.is_valid():
		serializer.save()
		return Response(serializer.data)
	return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def ticketDelete(request, pk):
	ticket = Ticket.objects.get(id=pk)
	ticket.delete()

	return Response('Item succsesfully delete!')



