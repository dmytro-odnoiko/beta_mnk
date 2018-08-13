from django.shortcuts import render
from django.http import HttpRequest
from .models import Your

def your(request):
    list_of_yours = Your.objects.all()
    return render(request, 'p_business.html', { 'yours': list_of_yours})
