import pytest
import app


@pytest.mark.all
@pytest.mark.module
def test_func_home_hello():
    assert app.func_home(51)['key'] == 'Hello'
    assert app.func_home(50)['key'] == 'Hello'
    assert app.func_home(65)['key'] == 'Hello'


@pytest.mark.all
@pytest.mark.module
def test_func_home_hi():
    assert app.func_home(0)['key'] == 'Hi'
    assert app.func_home(-1)['key'] == 'Hi'
    assert app.func_home(1)['key'] == 'Hi'
    assert app.func_home(49)['key'] == 'Hi'


@pytest.mark.all
@pytest.mark.module
def test_validate_false():
    assert not app.validate(0, "fgldfgj")
    assert not app.validate(3, "")
    assert not app.validate(4)
    assert not app.validate()
    assert not app.validate(-1, "flgkfdl")


@pytest.mark.all
@pytest.mark.module
def test_validate_true():
    assert app.validate(452, "flgkflgfg")
    assert app.validate(1, "fgdg")
    assert app.validate(3, "f")


@pytest.mark.all
@pytest.mark.module
def test_search_user_by_login_ok():
    assert app.search_user_by_login("dfgfgdlf", "flfjsljfkgj")['password'] == "flfjsljfkgj"
    assert app.search_user_by_login("2", "flfjsljfkgj")['password'] == "flfjsljfkgj"
    assert app.search_user_by_login("dfgfgdlf", "23.66")['password'] == "23.66"


@pytest.mark.all
@pytest.mark.module
def test_search_user_by_login_not_ok():
    assert app.search_user_by_login("", "flfjsljfkgj")['password'] == "Error"
    assert app.search_user_by_login("2", "")['password'] == "Error"
    assert app.search_user_by_login("dfgfgdlf")['password'] == "Error"


@pytest.mark.all
@pytest.mark.integrational
def test_func_log_in_ok():
    assert app.func_log_in("flgdlgkl", "dfgdfgdfg")['status'] == "OK"
    assert app.func_log_in("2", "dfgdfgdfg")['status'] == "OK"
    assert app.func_log_in("flgdlgkl", "23.76")['status'] == "OK"


@pytest.mark.all
@pytest.mark.integrational
def test_func_log_in_not_ok():
    assert app.func_log_in("", "")['status'] == "Login Error"
    assert app.func_log_in("", "dfgdfgdfg")['status'] == "Login Error"
    assert app.func_log_in("flgdlgkl", "")['status'] == "Login Error"
    assert app.func_log_in("flgdlgkl")['status'] == "Login Error"
    assert app.func_log_in()['status'] == "Login Error"


@pytest.mark.all
@pytest.mark.integrational
def test_func_add_amount_ok():
    assert app.func_add_amount(0, 4, "xgdfgdfg")['status'] == "OK"
    assert app.func_add_amount(-3, 4, "xgdfgdfg")['status'] == "OK"
    assert app.func_add_amount(1, 4, "xgdfgdfg")['status'] == "OK"
    assert app.func_add_amount(456, 4, "xgdfgdfg")['status'] == "OK"
    assert app.func_add_amount(0, 4, "23.64")['status'] == "OK"
    assert app.func_add_amount(0, 4, "2")['status'] == "OK"


@pytest.mark.all
@pytest.mark.integrational
def test_func_add_amount_not_ok():
    assert app.func_add_amount(0, 0, "xgdfgdfg")['status'] == "Error Validation"
    assert app.func_add_amount(-3, -1, "xgdfgdfg")['status'] == "Error Validation"
    assert app.func_add_amount(1, 4, "")['status'] == "Error Validation"
    assert app.func_add_amount(456, 4)['status'] == "Error Validation"
    assert app.func_add_amount(0)['status'] == "Error Validation"
    assert app.func_add_amount()['status'] == "Error Validation"

