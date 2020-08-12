from rest_framework import viewsets, permissions
from .models import Todo
from .serializer import TodoSerializer


class TodoViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = TodoSerializer

    def get_queryset(self):
        return self.request.user.todo.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
