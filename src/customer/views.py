from django.shortcuts import render, redirect
from django.forms.models import model_to_dict
from bcrypt import hashpw, gensalt, checkpw
from .models import Customer

# Create your views here.
def renderLogin (request):
    error = None
    if (request.POST):
        customer = Customer.objects.filter(email=request.POST['customer-email']).first()

        if checkpw(request.POST['customer-password'].encode('utf-8'), customer.password.encode('utf-8')):
            request.session['customer'] = model_to_dict(customer)

            request.session.modified = True

            return redirect('/')
        
        else:
            error = 'Password or email is incorrect!'
    return render(request, 'customer/login.html', {"error": error})

def renderRegister (request):
    if (request.POST):
        Customer.objects.create(
            firstname=request.POST['customer-first-name'],
            lastname=request.POST['customer-last-name'],
            email=request.POST['customer-email'],
            password=hashpw(request.POST['customer-password'].encode('utf-8'), gensalt()).decode('utf-8'),
        )

    return render(request, 'customer/register.html')

# def addCustomer (request):

#     return render(request, 'customer/register.html')