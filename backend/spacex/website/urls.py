from django.urls import path
from .views import *

urlpatterns = [
    path('menu/', MenuAPIView.as_view({'get': 'list'})),
    path('advantages/', AdvantagesAPIView.as_view({'get': 'list'})),
]
