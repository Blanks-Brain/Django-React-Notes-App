from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import NoteSerializer
from .models import Notes
# Create your views here.

class ListCreateAPIView(ListCreateAPIView):
    queryset = Notes.objects.all().order_by('-updated_at')
    serializer_class = NoteSerializer

class RUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all().order_by('-updated_at')
    serializer_class = NoteSerializer

    