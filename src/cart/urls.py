from django.urls import path 
from . import views 

urlpatterns = [
    path('cart/view', views.renderCart),
    path('cart/add', views.addToCart),
    path('cart/remove', views.removeFromCart)
]