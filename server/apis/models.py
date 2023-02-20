from django.db import models
from django.contrib.auth.models import User
from safedelete.models import SafeDeleteModel, HARD_DELETE_NOCASCADE


class BaseModel(SafeDeleteModel):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_by_%(class)s', null=True)
    updated_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='updated_by_%(class)s', null=True)

    class Meta:
        abstract = True
        

class Post(BaseModel):
    title = models.CharField(max_length=255, unique=True, verbose_name='ชื่อหัวข้อบทความ')
    content = models.TextField(blank=True, null=True, verbose_name='รายละเอียดบทความ')
    author = models.CharField(max_length=255, verbose_name='ชื่อผู้แต่งบทความ', default='admin')

    def __str__(self):
        return self.title
