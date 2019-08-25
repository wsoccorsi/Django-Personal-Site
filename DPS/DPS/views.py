from django.shortcuts import render
from common.models import Tech

def home(request):
    tech_query = Tech.objects.all()
    return render(request, 'common/view.html', {'tech_stack' : tech_query})


def resume(request):
    return render(request, 'common/resume.html')
