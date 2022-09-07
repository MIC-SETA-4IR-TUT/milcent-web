from multiprocessing import context
from django.shortcuts import render

from products.forms import ProductForm
from products.models import Product

# Create your views here.
def renderProducts (request):
    context = {
        "form": ProductForm(),
        "products": Product.objects.all().values()
    }
    
    return render(request, 'admin/products.html', context)