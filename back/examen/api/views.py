from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

class IndexView(APIView):
    def get(self, request):
        context = {
            'status':True,
            'content':'api django activa'
        }
        return Response(context)

class PostulanteView(APIView):
    def get(self, request):
        dataLibro = Postulante_oferta.objects.all()
        serLibro = PostulanteSerializer(dataLibro, many=True)
        context = {
            'status': True,
            'content': serLibro.data
        }
        return Response(context)
    
    def post(self, request):
        serLibro = PostulanteSerializer(data=request.data)
        serLibro.is_valid(raise_exception=True)
        serLibro.save()
        return Response(serLibro.data)

class PostulanteDetail(APIView):
    def get(self, request, id):
        dataLibro = Postulante_oferta.objects.get(pk=id)
        serLibro = PostulanteSerializer(dataLibro)
        return Response(serLibro.data)

    def put(self, request, id):
        dataLibro = Postulante_oferta.objects.get(pk=id)
        serLibro = PostulanteSerializer(dataLibro, data=request.data)
        serLibro.is_valid(raise_exception=True)
        print(serLibro)
        serLibro.save()
        return Response(serLibro.data)
    
    def delete(self, request, id):
        dataLibro = Postulante_oferta.objects.get(pk=id)
        serLibro = PostulanteSerializer(dataLibro)
        dataLibro.delete()
        return Response(serLibro.data)