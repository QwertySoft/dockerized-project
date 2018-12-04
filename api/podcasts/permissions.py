from rest_framework.permissions import BasePermission

class IAmMe(BasePermission):
    def has_permission(self, request, view):
        if request.method != 'POST':
            return False
        if (request.method == 'POST'):
            return request.data.get('user') == request.user.id
        return True