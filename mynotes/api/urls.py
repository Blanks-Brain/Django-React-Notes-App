from django.urls import path
from .views import ListCreateAPIView,RetrieveUpdateDestroyAPIView

urlpatterns = [
    path('lc/', ListCreateAPIView.as_view(),name='lc'),
    path('rud/', ListCreateAPIView.as_view(),name='rud'),
]
