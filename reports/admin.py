from django.contrib import admin
from .models import Report


class ReportAdmin(admin.ModelAdmin):
    list_display = ('report_name','report_file','report_year')
    list_filter = ('report_year',)

admin.site.register(Report, ReportAdmin)
