from django.shortcuts import render
from common.models import Tech
from requests import request
# import React, {Component} from 'React';
def home(request):
    tech_query = Tech.objects.all()
    return render(request, 'common/view.html', {'tech_stack' : tech_query})

def resume(request):
    return render(request, 'common/resume.html')

def spaceX(request):
    return render(request, 'build/index.html')
