from django.http import JsonResponse
from django.shortcuts import render

from .models import Cart
from django.forms.models import model_to_dict
from products.models import Product

import json

# Create your views here.
def addToCart (request):
    if (request.POST):
        product = Cart.objects.filter(
            productId=request.POST['productId'],
            customerId=request.session['customer']['id'],
        ).first()

        if (product):
            product.quantity = product.quantity + 1
            product.save()

        else:
            Cart.objects.create(
                productId=request.POST['productId'],
                customerId=request.session['customer']['id'],
                quantity=1.0
            )

    return JsonResponse({ "successful": True })

def removeFromCart (request):
    if (request.POST):
        product = Cart.objects.filter(
            productId=request.POST['productId'],
            customerId=request.session['customer']['id'],
        ).first()

        if (product and product.quantity > 1):
            product.quantity = product.quantity - 1
            product.save()

        else:
            product.delete()

    return JsonResponse({ "successful": True })

def renderCart (request):
    cartProducts = Cart.objects.filter(customerId=request.session['customer']['id']).values()
    products = []

    for cartProduct in cartProducts:
        print(cartProduct)
        product = model_to_dict(Product.objects.filter(id=cartProduct["productId"]).first())

        product['quantity'] = cartProduct["quantity"]
        product['price'] = str(product['price'])
        product['quantity'] = str(product['quantity'])
        product['thumbnail'] = None

        products.append(product)

    return render(request, 'base/cart.html', { "products": products, "products_str": json.dumps(products) })