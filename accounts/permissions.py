from rest_framework import permissions

class IsAdminOrOwner(permissions.BasePermission):
    """
    Custom permission:
    - Admin can access everything
    - Users can access only their own objects
    """

    def has_object_permission(self, request, view, obj):
        # Admin can do anything
        if request.user.role == 'admin':
            return True

        # Otherwise, check if the user is owner
        return obj.user == request.user
