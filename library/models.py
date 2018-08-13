from django.db import models
from filer.fields.file import FilerFileField
from filer.fields.image import FilerImageField


class Book(models.Model):
        class Meta:
            db_table = "books"
        book_name = models.CharField(max_length=255)
        book_author = models.CharField(max_length=255)
        book_review = models.TextField(blank=True)
        book_file = FilerFileField(null=True,blank=True,related_name="book")
        book_cover = FilerImageField(null=True,blank=True,related_name="book_covers")

        def __str__(self):
            return self.book_name
