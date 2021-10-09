import psycopg2


class DatabaseConnector:

    def __init__(self):
        self.connection = psycopg2.connect(
            database="web_design_example",
            user="postgres1",
            password="123456",
            host="localhost",
            port="5432"
        )
        self.cur = self.connection.cursor()
        self.cur.execute("CREATE TABLE transaction (id serial PRIMARY KEY, card_num varchar(19), sum integer);")
        self.connection.commit()

    def add_new_transaction(self, card_number: str, summa: int):
        try:
            print("Hi")
            self.cur.execute("INSERT INTO transaction (card_num, sum) VALUES (" +
                             card_number + ", " + str(summa) + ");")
            self.connection.commit()
            return True
        except psycopg2.OperationalError:
            return False
