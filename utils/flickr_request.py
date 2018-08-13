import flickrapi
from collections import namedtuple

Flickr_Data = namedtuple('Flickr_Data',['album_url','album_title','primaryphoto_url','album_countviews','description'])

API_KEY =  u'f3171b3c515f2f9b8c30c01bf4fb6900'
API_SECRET = u'33d5ce68bc3e126f'
USER_ID = '160653337@N06'
URL_TEMPLATE ='https://www.flickr.com/photos/'+USER_ID+'/albums/'

def get_albums():
	flickr = flickrapi.FlickrAPI(API_KEY, API_SECRET, format='parsed-json')
	sets  = flickr.photosets.getList(user_id=USER_ID)
	albums = sets['photosets']['photoset']
	return albums

