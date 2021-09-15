from fastapi import FastAPI, Query
from schemas import LoginRequest

app = FastAPI()


@app.get("/")
def home():
    return {
        "key": "Hello"
    }


def searchUserByLogin(login, password = Query(default="", deprecated=True)):
    return {
        'id': 1,
        'password': password,
        'token': 'dfgkdflgkdflgkflgdfk',
        'name': 'John',
        'age': 23,
        'cash': 145
    }


def validate(id, token):
    return True #until DB


@app.post('/mining')
def addAmount(amount: int, id: int, token: str):
    if(validate(id, token)):
        #add amount, until DB
        return {
            'status': 'OK'
        }
    else:
        return {
            'status': 'Error Validation'
        }


@app.post('/login')
def get_item(req: LoginRequest):
    user = searchUserByLogin(req.login, req.password)
    if user['password'] == req.password:
        return {
            'status': 'OK',
            'id': user['id'],
            'name': user['name'],
            'token': user['token'],
            'age': user['age'],
            'cash': user['cash']
        }
    else:
        return {
            'status': 'Login Error'
        }