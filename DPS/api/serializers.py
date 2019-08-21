from common.models import Tech
from rest_framework import serializers

class TechSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tech
        fields = ('name', 'profecieny')
