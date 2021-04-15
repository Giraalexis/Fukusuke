from rest_framework import serializers
from .models import SailDetail

class SailDetailSerializer(serializers.ModelSerializer):
	class Meta:
		model = SailDetail
		fields ='__all__'