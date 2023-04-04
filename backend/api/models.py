from django.db import models
from datetime import datetime
from django.contrib.auth.models import User

# Create your models here.
class Todo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, blank=True, null=True)
    title = models.CharField(max_length=200, null=True, blank=True)
    amount = models.PositiveIntegerField(blank=True, null=True)
    date = models.DateTimeField(default=datetime.now())
    
    def __str__(self) -> str:
        return f"{self.user} -  {self.title}"