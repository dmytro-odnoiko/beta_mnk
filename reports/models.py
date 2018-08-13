from django.db import models
from filer.fields.file import FilerFileField

class Report(models.Model):
        class Meta:
            db_table = "reports"
        report_name = models.CharField(max_length=255)
        report_year = models.CharField(max_length=4)
        report_file = FilerFileField(null=True, blank=True, related_name="reports")

        def __str__(self):
            return self.report_name
