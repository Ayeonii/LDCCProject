from django.shortcuts import render
from django.views.generic import TemplateView

class foodAppTV(TemplateView):
    template_name = 'foodApp/foodApp_index.html'

# Create your views here.
