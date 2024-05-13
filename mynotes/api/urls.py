from django.urls import path
from .views import listCreateAPIView,RUDAPIView

urlpatterns = [
    path('notes/', listCreateAPIView.as_view(),name='notes'),
    path('notes/<int:pk>/', RUDAPIView.as_view(),name='note'),
]
