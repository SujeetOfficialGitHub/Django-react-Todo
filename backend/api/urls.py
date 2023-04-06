from django.urls import path
from .views import TodoView

urlpatterns = [
    path('todo/', TodoView.as_view(), name="todo"),
    path('todo/<id>', TodoView.as_view(), name="todo"),
]
