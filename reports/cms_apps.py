from cms.app_base import CMSApp
from cms.apphook_pool import apphook_pool


@apphook_pool.register  # register the application
class ReportApphook(CMSApp):
    app_name = "reports"
    name = "Reports"

    def get_urls(self, page=None, language=None, **kwargs):
        return ["reports.urls"]
