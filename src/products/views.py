from django.shortcuts import render, redirect
from django.forms.models import model_to_dict
from products.forms import ProductForm, Product
from .models import Product

# Create your views here.
def viewProduct (request, productId):
    context = {
        "product": model_to_dict(Product.objects.get(id=productId))
    }

    return render(request, 'products/view.html', context)

def viewPayment (request, productId):
    context = {
        "product": model_to_dict(Product.objects.get(id=productId))
    }

    return render(request, 'products/payment.html', context)

def addProduct (request):
    form = ProductForm(request.POST, request.FILES)

    if (form.is_valid()):
        form.save()

    return redirect('/administration/products')
