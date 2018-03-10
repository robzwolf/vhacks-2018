'''
# What is this?
`models.py` is a file that describes all CRUD (create, read, update, destroy) operations possible when interfacing with the database, which is itself specified in `reviews.db`. In particular, `models.py` dictates what happens when one wants to add a review, upvote a review, or downvote a review (TODO).
'''

import sqlite3 as sql

def insert_review(review,ranking,latitude,longitude):
    con = sql.connect('reviews.db') # Setup connection to DB
    cur = con.cursor()              # Cursor object
    cur.execute('INSERT INTO reviews (review,ranking,latitude,longitude) VALUES (?,?,?,?)', (review,ranking,latitude,longitude))
    con.commit()                    # Commit changes when sending data to DB
    con.close()                     # Close out SQL connection

def select_review(params=()):
    con = sql.connect('reviews.db')
    cur = con.cursor()
    if params == ():
        print("NO PARAMS **************")
        cur.execute('select * from reviews')
    else:
        print("PARAMS *****************")
        print(params)
        query = 'select ' # put together a more complex query
        for i in range(len(params)-1):
            query += params[i] + ',' 
        query += params[len(params)-1]
        query += ' from reviews'
        result = cur.execute(query)
        fetchall = result.fetchall()
        con.close()
        return fetchall
