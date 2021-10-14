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
        try:
            self.cur.execute("CREATE TABLE transaction (id serial PRIMARY KEY, card_num varchar(19), sum integer);")
        except psycopg2.Error:
            x = 1
            #ignore
        self.connection.commit()

    def add_new_transaction(self, card_number: str, summa: int):
        if not card_number.isnumeric():
            return [False, -1]
        if(summa < 0):
            return [False, -1]
        elif summa == 0:
            return [True, summa]
        try:
            print("Hi")
            self.cur.execute("INSERT INTO transaction (card_num, sum) VALUES (" +
                             card_number + ", " + str(summa) + ");")
            self.connection.commit()
            return [True, summa]
        except psycopg2.OperationalError:
            return [False, -1]
