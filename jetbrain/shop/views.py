from django.shortcuts import render

# Create your views here.
from django.views import View
from .models import *


class ProductView(View):
    template_name = 'product-new.html'

    def get(self, request):
        products = Product.objects.all()
        context = {
            'products': products
        }
        return render(request, self.template_name, context=context)
