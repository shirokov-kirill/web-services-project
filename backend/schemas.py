from pydantic import BaseModel
from datetime import date
from typing import List


class Item(BaseModel):
    name: str
    value: float
    description: str
#    image:


class ItemList(BaseModel):
    list: List[Item]


class LoginRequest(BaseModel):
    login: str
    password: str