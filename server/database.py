import mysql.connector

config = {
    'user': 'root',
    'password': 'password',
    'host': 'db',
    'database': 'app_db'
}

db = mysql.connector.connect(**config)
cursor = db.cursor()