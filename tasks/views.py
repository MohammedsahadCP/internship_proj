from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Task
from .serializers import TaskSerializer
from accounts.permissions import IsAdminOrOwner  
import logging

logger = logging.getLogger('tasks')

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [IsAuthenticated, IsAdminOrOwner]

    def get_queryset(self):
        user = self.request.user
        if user.role == 'admin':
            return Task.objects.all()   
        return Task.objects.filter(user=user) 
    
    def perform_create(self, serializer):
        task = serializer.save(user=self.request.user)
        logger.info(f"Task created by {self.request.user.username}: {task.title}")

    def perform_update(self, serializer):
        task = serializer.save()
        logger.info(f"Task updated by {self.request.user.username}: {task.title}")

    def perform_destroy(self, instance):
        logger.info(f"Task deleted by {self.request.user.username}: {instance.title}")
        instance.delete()

