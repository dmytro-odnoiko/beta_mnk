from django.shortcuts import render
from django.http import HttpRequest
from utils.flickr_request import get_albums

# Create your views here.
def flickr_views(request):
    albums = get_albums()
    return render(request, 'p_gallery.html', {'albums': albums})
