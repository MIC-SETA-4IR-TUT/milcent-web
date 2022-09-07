from django.shortcuts import render

from products.models import Product

# Create your views here.
def renderHome (request):
    context = {
        "lastestEquipments": Product.objects.all().filter(category="Equipment").order_by('-id')[:4],
        "lastestChickens": Product.objects.all().filter(category="Chicken").order_by('-id')[:4]
    }
    
    return render(request, 'base/home.html', context)
