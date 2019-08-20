from rest_framework import serializers
from common.models import Tech

class TechSerializer(serializers.ModelSerializer):

    class Meta:
        model = Tech
        fields = [
            'id',
            'name'
        ]
