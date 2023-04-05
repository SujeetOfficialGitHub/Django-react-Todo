from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class TodoView(APIView):
    def post(self, request, format=None):
        data = request.data 
        data['user'] = request.user.id
        serializer = TodoSerializer(data= data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)
    
    def get(self, request, format=None):
        queryset = Todo.objects.filter(user=request.user.id)
        serializer = TodoSerializer(queryset, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)