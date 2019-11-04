import graphene
from task.schema import Query as tasks_query, Mutation as task_mutation 

class Mutation(tasks_query):
    pass
class Query(tasks_query):
    pass

schema = graphene.Schema(query=Query, mutation=Mutation)