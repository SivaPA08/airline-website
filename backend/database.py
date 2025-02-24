import sqlite3 as sql

conn=sql.connect("airline.db")
con=conn.cursor()
con.execute("SELECT name FROM sqlite_master WHERE type='table'")
val=con.fetchall()
print(val)