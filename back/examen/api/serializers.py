from dataclasses import fields
from rest_framework import serializers

from .models import *

class PostulanteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Postulante_oferta
        fields ='__all__'