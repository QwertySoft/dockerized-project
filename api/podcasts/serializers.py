from rest_framework import serializers
from rest_flex_fields import FlexFieldsModelSerializer
from django.core.exceptions import ObjectDoesNotExist
from .models import Podcast, Comment, Like
from users.serializers import UserSerializer

# Serializer of Like
class LikeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = ('id', 'podcast', 'user')

# Serializer of Podcast
class PodcastSerializer(FlexFieldsModelSerializer):
    created = serializers.DateTimeField(read_only=True)
    likeme = serializers.SerializerMethodField()

    class Meta:
        model = Podcast
        fields = ('id', 'title', 'description', 'album', 'author', 'created', 'youtube_url', 'cover', 'song', 'likes_amount', 'likeme')

    # Method for calculate likeme
    def get_likeme(self, obj):
        user = None
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            user = request.user
            try:
                like = Like.objects.get(user=user.id, podcast=obj.id)
                return like is not None
            except ObjectDoesNotExist:
                return False
        else:
            return False

# Serializer of Comment
class CommentSerializer(serializers.ModelSerializer):
    created = serializers.DateTimeField(read_only=True)
    username = serializers.SerializerMethodField()

    class Meta:
        model = Comment
        fields = ('id', 'text', 'user', 'username', 'podcast', 'created')

    # Method for calculate username
    def get_username(self, obj):
        return obj.user.username