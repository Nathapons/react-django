from rest_framework import generics, status
from rest_framework.response import Response

from .serializers import PostSerializer
from .models import Post


class PostListCreateApiView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer


class PostByIdApiView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    