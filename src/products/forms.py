from itertools import product
from django import forms

from .models import Product

class ProductForm(forms.ModelForm):
    class Meta:
        model = Product
        fields = [
            'category',
            'brand',
            'name',
            'price',
            'thumbnail',
            'description'
        ]

        choices = (('Equipment', 'Equipment'), ('Chicken', 'Chicken'), ('Egg', 'Egg'))

        widgets ={
            'category': forms.Select(choices=choices),
            'brand': forms.TextInput(attrs={'placeholder': 'Elite Poultry'}),
            'name': forms.TextInput(attrs={'placeholder': 'Chicken feather plucker'}),
            'price': forms.TextInput(attrs={'placeholder': 'R10, 000.00'}),
            'description': forms.Textarea(attrs={'placeholder': 'Description goes here', 'style':'height:10rem'}),
        }