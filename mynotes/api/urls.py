from django.urls import path
from .views import ListCreateAPIView,RUDAPIView

urlpatterns = [
    path('notes/', ListCreateAPIView.as_view(),name='notes'),
    path('notes/<int:pk>/', RUDAPIView.as_view(),name='note'),
]
