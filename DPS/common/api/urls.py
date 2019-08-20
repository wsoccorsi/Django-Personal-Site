from .views import TechStackView
from django.urls import path, include
from django.contrib import admin

urlpatterns = [
path(r'<slug:slug>/', TechStackView.as_view(), name='post-tech')
]
