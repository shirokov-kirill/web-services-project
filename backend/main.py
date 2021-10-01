from fastapi import FastAPI
from graphene import ObjectType, List, String, Schema
from graphql.execution.executors.asyncio import AsyncioExecutor
from starlette.graphql import GraphQLApp
from schemas import LoginRequest, ItemsSet
from fastapi.middleware.cors import CORSMiddleware
from app import *
import json

app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ItemSetList(ObjectType):
  item_set_list = None
  get_item_set = List(ItemsSet)
  async def resolve_get_item_set(self, info):
    with open("ItemSetList.json") as list:
      item_set_list = json.load(list)
    return item_set_list


app.add_route("/products", GraphQLApp(
  schema=Schema(query=ItemSetList),
  executor_class=AsyncioExecutor)
)


@app.get("/{number}")
def home(number: int):
    return func_home(number)


@app.post('/mining')
def add_amount(amount: int, id: int, token: str):
    return func_add_amount(amount, id, token)


@app.post('/login')
def log_in(req: LoginRequest):
    return func_log_in(req.login, req.password)