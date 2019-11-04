import graphene
from graphene_django.types import DjangoObjectType
from .models import Task

class TaskType(DjangoObjectType):
    class Meta:
        model = Task

class Query(graphene.ObjectType):
    all_tasks = graphene.List(TaskType)
    def resolve_all_tasks(self, info, **kwargs):
        return Task.objects.all()

class Mutation(graphene.ObjectType):
    # This class will inherit from multiple Queries
    # as we begin to add more apps to our project
    pass
