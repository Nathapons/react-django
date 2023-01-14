from django.urls import path
from rest_framework_swagger.views import get_swagger_view

from apis import views

urlpatterns = [
    path('posts/', views.PostListCreateApiView.as_view(), name='post'),
    path('posts/<int:pk>/', views.PostByIdApiView.as_view(), name='post_by_id'),
]