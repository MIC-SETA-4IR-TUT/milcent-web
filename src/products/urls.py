from django.urls import path
from . import views 

urlpatterns = [
    path('product/add-product', views.addProduct),
    path('product/<int:productId>/view', views.viewProduct),
    path('product/<int:productId>/pay', views.viewPayment)
]