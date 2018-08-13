from django.shortcuts import render

# Create your views here.
from django.http import HttpRequest
from .models import Report

def reports(request):
    list_of_reports = Report.objects.all()
    list_of_years = Report.objects.values_list('report_year', flat=True)
    return render(request, 'p_reporting.html', { 'reports': list_of_reports,'years':list_of_years})
