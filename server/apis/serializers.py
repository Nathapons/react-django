from rest_framework import serializers
from .models import Post


class PostSerializer(serializers.ModelSerializer):
    created_at = serializers.DateTimeField(format='%d/%m/%Y %H:%M', read_only=True)
    updated_at = serializers.DateTimeField(format='%d/%m/%Y %H:%M', read_only=True)
    created_by = serializers.HiddenField(default=serializers.CurrentUserDefault())
    updated_by = serializers.HiddenField(default=serializers.CurrentUserDefault())

    def create(self, validated_data):
        instance = super().create(validated_data)
        instance.created_by = self.context['user']
        instance.updated_by = self.context['user']
        instance.save()
        return instance
    
    def update(self, instance, validated_data):
        instance = super().update(instance, validated_data)
        instance.updated_by = self.context['user']
        return instance
    class Meta:
        model = Post
        fields = '__all__'
        