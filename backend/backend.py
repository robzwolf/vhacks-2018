from config import Config
from flask import Flask, render_template, g
from flask_sqlalchemy import SQLAlchemy
import os
import sqlite3

app = Flask(__name__, template_folder='../templates')

### Database config ###
DB = './reviews.db'

@app.route("/")
def index(): 
    return render_template("map.html")

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DB)

# Close DB connection.
@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

if __name__ == '__main__':
    app.run(debug=True)
