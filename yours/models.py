from django.db import models
from filer.fields.image import FilerImageField


class Your(models.Model):
        class Meta:
            db_table = "yours"
        your_name = models.CharField(max_length=50)
        your_direction = models.CharField(max_length=50)
        your_people = models.CharField(blank=True, max_length=70)
        your_peopleurl = models.CharField(blank=True, max_length=120)
        your_year_of_foundation = models.CharField(blank=True, max_length=4)
        your_description = models.TextField(blank=True)
        your_cover = FilerImageField(null=True,blank=True,related_name="your_covers")
        your_site = models.CharField(blank=True, max_length=120)
        your_facebook = models.CharField(blank=True, max_length=120)
        your_instagram = models.CharField(blank=True, max_length=120)
        your_twitter = models.CharField(blank=True, max_length=120)
        your_youtube = models.CharField(blank=True, max_length=120)
        your_pinterest = models.CharField(blank=True, max_length=120)
        your_flickr = models.CharField(blank=True, max_length=120)

        def __str__(self):
            return self.your_name
