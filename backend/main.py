from fastapi import FastAPI, Query
from schemas import LoginRequest
from fastapi.middleware.cors import CORSMiddleware
from app import *

app = FastAPI()


origins = ["*"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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