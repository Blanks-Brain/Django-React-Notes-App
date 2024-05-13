from django.shortcuts import render
from rest_framework.generics import ListCreateAPIView,RetrieveUpdateDestroyAPIView
from .serializers import NoteSerializer
from .models import Notes
from rest_framework.response import Response
from rest_framework.views import status
# Create your views here.

class listCreateAPIView(ListCreateAPIView):
    
    def post(self, request, *args, **kwargs):
        data = request.data
        note = Notes.objects.create(
            body = data['body']
           
        )
        
        serializer = NoteSerializer(note, many=False)
        return Response(serializer.data,status=status.HTTP_201_CREATED)
    
    queryset = Notes.objects.all().order_by('-updated_at')
    serializer_class = NoteSerializer

class RUDAPIView(RetrieveUpdateDestroyAPIView):
    queryset = Notes.objects.all().order_by('-updated_at')
    serializer_class = NoteSerializer

    