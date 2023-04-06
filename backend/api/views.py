from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Todo
from .serializers import TodoSerializer

# Create your views here.
class TodoView(APIView):
    def post(self, request, format=None):
        data = request.data 
        serializer = TodoSerializer(data= data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'data': serializer.data}, status=status.HTTP_201_CREATED)
    
    def get(self, request, format=None):
        queryset = Todo.objects.filter()
        serializer = TodoSerializer(queryset, many=True)
        return Response({'data': serializer.data}, status=status.HTTP_200_OK)
    
    def delete(self, request, id, format=None):
        queryset = Todo.objects.get(id=id)
        queryset.delete()
        return Response({'message': 'Item deleted'}, status=status.HTTP_200_OK)
    
    def put(self, request, id, format=None):
        queryset = Todo.objects.get(id=id)
        serializer = TodoSerializer(queryset, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'data updated', 'data': serializer.data}, status=status.HTTP_200_OK)