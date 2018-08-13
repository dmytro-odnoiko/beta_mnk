from django.contrib import admin
from .models import Book

# Register your models here.
class BookAdmin(admin.ModelAdmin):
    list_display = ('book_name','book_file','book_author','book_review','book_cover')
    list_filter = ('book_author',)

admin.site.register(Book, BookAdmin)
