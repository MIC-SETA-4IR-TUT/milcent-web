from django.urls import path
from . import views

urlpatterns = [
    path('login', views.renderLogin),
    path('register', views.renderRegister),
]