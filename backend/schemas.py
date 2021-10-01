from pydantic import BaseModel
from graphene import ObjectType, String, List, Int


class Item(ObjectType):
    item_id = Int(required=True)
    name = String(required=True)
    value = Int(required=True)
    description = String(required=True)
    recommendations = List(Int)


class ItemsSet(ObjectType):
    set_id = Int(required=True)
    name = String(required=True)
    size = Int(required=True)
    list = List(Item)


class LoginRequest(BaseModel):
    login: str
    password: str