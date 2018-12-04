from rest_framework import serializers
from .models import User

# Serializer de User
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')