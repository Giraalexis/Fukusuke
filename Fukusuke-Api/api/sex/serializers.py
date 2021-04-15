from rest_framework import serializers
from .models import Sex

class SexSerializer(serializers.ModelSerializer):
	class Meta:
		model = Sex
		fields ='__all__'