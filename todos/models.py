from django.contrib.auth.models import User
from django.db import models


class Todo(models.Model):
    text = models.CharField(max_length=100)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    owner = models.ForeignKey(
        User, related_name="todo", on_delete=models.CASCADE, null=True
    )
