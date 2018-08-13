from django.shortcuts import render
from django.http import HttpRequest
from .models import Book

def books(request):
    list_of_books = Book.objects.all()
    return render(request, 'p_library.html', { 'books': list_of_books})
