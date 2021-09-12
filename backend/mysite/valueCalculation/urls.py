from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from . import views

urlpatterns = [
    path('', views.simpleGetRequest, name='simpleGetRequest'),
    path('complex/', views.defineComplexMethod, name='form'),
]