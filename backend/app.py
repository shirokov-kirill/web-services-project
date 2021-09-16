def func_home(number):
    if(number < 50):
        return {
            'key': 'Hi'
        }
    return {
        'key': 'Hello'
    }


def search_user_by_login(login="", password=""):
    if login == "" or password == "":
        return {
            'id': 1,
            'password': 'Error',
            'token': 'dfgkdflgkdflgkflgdfk',
            'name': 'John',
            'age': 23,
            'cash': 145
        }
    return {
        'id': 1,
        'password': password,
        'token': 'dfgkdflgkdflgkflgdfk',
        'name': 'John',
        'age': 23,
        'cash': 145
    }


def validate(id=0, token=""):  #until DB
    if id <= 0 or token == "":
        return False
    return True


def func_add_amount(amount=0, id=0, token=""):
    if(validate(id, token)):
        #add amount, until DB
        return {
            'status': 'OK'
        }
    else:
        return {
            'status': 'Error Validation'
        }


def func_log_in(login="", password=""):
    user = search_user_by_login(login, password)
    if user['password'] == password:
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