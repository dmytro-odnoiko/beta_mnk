from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool


@apphook_pool.register  # register the application
class YoursApphook(CMSApp):
    app_name = "yours"
    name = "Yours"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["yours.urls"]
