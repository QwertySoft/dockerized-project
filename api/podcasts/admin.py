from django.contrib import admin
from .models import Podcast

@admin.register(Podcast)
class PodcastAdmin(admin.ModelAdmin):
    readonly_fields = ('likes_amount',)
    list_display = ('id', 'title', 'album', 'likes_amount', 'created', 'enabled')
    search_fields = ('author', 'title', 'album')
    list_filter = ('updated',)
    date_hierarchy = 'created'