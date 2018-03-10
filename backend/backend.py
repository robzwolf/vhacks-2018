from flask import Flask, render_template, request, g
import models
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

@app.route('/insert_review', methods=['GET', 'POST'])
def insert_review():
    review = request.form['review']
    ranking = request.form['ranking']
    latitude = request.form['latitude']
    longitude = request.form['longitude']
    models.insert_review(review,ranking,latitude,longitude)
    return ("RECEIVED REQUEST WITH PARAMETERS %s %s %s %s" % (review, ranking, latitude, longitude)) # TODO handle (AJAX?) POST requests with this return body

@app.route('/get_review/<id>')
def get_review(id):
    review = models.select_review(id)
    return str(review)

if __name__ == '__main__':
    app.run(debug=True)
