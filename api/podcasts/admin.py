from django.contrib import admin
from .models import Podcast

@admin.register(Podcast)
class PodcastAdmin(admin.ModelAdmin):
    readonly_fields = ('likes_amount',)
    list_display = ('id', 'title', 'album', 'likes_amount', 'created')
    search_fields = ['__all__']
    list_filter = ('updated',)
    date_hierarchy = 'created'