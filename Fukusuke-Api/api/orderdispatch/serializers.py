from rest_framework import serializers
from .models import Orderdispatch

class OrderdispatchSerializer(serializers.ModelSerializer):
	class Meta:
		model = Orderdispatch
		fields ='__all__'