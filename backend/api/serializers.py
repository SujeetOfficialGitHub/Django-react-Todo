from rest_framework import serializers
from .models import Todo
from django.contrib.auth.models import User

# class SimpleUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ['username']

class TodoSerializer(serializers.ModelSerializer):
    # user = SimpleUserSerializer()
    class Meta:
        model = Todo
        fields = "__all__"
        
    # def update(self, instance, validated_data):
    #     print(instance)
    #     print(validated_data)
    #     return super().update(instance, validated_data)
    