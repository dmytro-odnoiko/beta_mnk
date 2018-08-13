"""
WSGI config for mnk project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.8/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

#~ sys.path.append('/srv/http/sklad.toprope.com.ua/.env/sklad/lib/python2.7/')
#~ sys.path.append('/srv/http/sklad.toprope.com.ua/.env/sklad/lib/python2.7/site-packages/')
#~ sys.path.append('/srv/http/sklad.toprope.com.ua/erp/')


os.environ.setdefault("DJANGO_SETTINGS_MODULE", "mnk.settings")

application = get_wsgi_application()
