from django.contrib import admin
from django.urls import path, include
from rest_framework import routers

router = routers.DefaultRouter() # Instanciamos el router de REST Framework

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
]
