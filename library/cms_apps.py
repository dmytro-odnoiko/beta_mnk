from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool


@apphook_pool.register  # register the application
class PollsApphook(CMSApp):
    app_name = "library"
    name = "Library"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["library.urls"]
