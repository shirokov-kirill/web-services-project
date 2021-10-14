import pytest
from DatabaseConnector import DatabaseConnector


@pytest.mark.all
@pytest.mark.integrational
def test_database_connector_first():
    database_connector = DatabaseConnector()
    assert database_connector.add_new_transaction("1234", 1000)[0] == True
    assert database_connector.add_new_transaction("1562 gklfgdgdfg", 5000)[0] == False
    assert  database_connector.add_new_transaction("143 344", 2000)[0] == False
    assert database_connector.add_new_transaction("0421939259235021", 2000)[0] == True


@pytest.mark.all
@pytest.mark.integrational
def test_database_connector_second():
    database_connector = DatabaseConnector()
    assert database_connector.add_new_transaction("1234", 1000)[1] == 1000
    assert database_connector.add_new_transaction("1562 gklfgdgdfg", 5000)[1] == -1
    assert  database_connector.add_new_transaction("143 344", 2000)[1] == -1
    assert database_connector.add_new_transaction("0421939259235021", 2000)[1] == 2000