from rest_framework import generics
from common.models import Tech
from .serializers import TechSerializer
# Create your views here.

#following https://www.youtube.com/watch?v=tG6O8YF91HE
class TechStackView(generics.RetrieveUpdateDestroyAPIView): #API ENDPOINT
    lookup_field = 'pk'
    serializer_class = TechSerializer

    # queryset     =  Tech.objects.all()

    def get_queryset(self):
        return Tech.objects.all()
