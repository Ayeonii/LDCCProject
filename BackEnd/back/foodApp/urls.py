from django.urls import path
from . import views

app_name = 'foodApp'
urlpatterns = [
	path('', views.foodAppTV.as_view(), name='index'),
]
