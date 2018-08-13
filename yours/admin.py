from django.contrib import admin
from .models import Your

# Register your models here.
class YourAdmin(admin.ModelAdmin):
    list_display = ('your_name','your_direction','your_people','your_peopleurl','your_year_of_foundation','your_description','your_cover','your_site','your_facebook','your_instagram','your_twitter','your_youtube','your_pinterest','your_flickr')
    

admin.site.register(Your, YourAdmin)
