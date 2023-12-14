from django.http.response import HttpResponse
from django.shortcuts import render
from django.urls import reverse

# Create your views here.


def index(request):
    return render(request, "show_weather/index.html")
