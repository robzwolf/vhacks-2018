from flask import Flask, request, send_from_directory, jsonify, json, \
    render_template
from flask_sqlalchemy import SQLAlchemy
import os.path
import uuid
import logging
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from twilio.rest import Client
import folium
from folium.plugins import MarkerCluster
import random
import sys
import math
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import jsonify
import json
from IPython.display import HTML, display
from sklearn.datasets.samples_generator import make_blobs

random.seed(1234)
sns.set(font_scale=1.5)
counter = 0

app = Flask(__name__, static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///main.db'
engine = create_engine('sqlite:///main.db', echo=True)
Session = sessionmaker(bind=engine)
session = Session()


def generate_random_data(lat, lon, n_samples, n_centers):
    centers = np.zeros((n_centers, 2))
    for i in range(n_centers - 1):
        dec_lat = (random.random() * 2 - 1) / 100
        dec_lon = (random.random() * 2 - 1) / 100
        centers[i][0] = 37.427829 + dec_lat
        centers[i][1] = -122.170214 + dec_lon
        centers[-1][0] = lat
        centers[-1][1] = lon

    data, cluster_labels = make_blobs(n_samples=n_samples, centers=centers,
                                      cluster_std=0.0004, random_state=0)
    return data, cluster_labels


def create_map(jdata, center_coords):
    # Loads data from csv into pandas dataframe
    with open("/Users/adamccskier/PycharmProjects/VHacks/backend/example_doctors.json") as f:
        jdata = json.loads(f.read())
        center_coords = jdata["region"]["center"]["latitude"], \
                        jdata["region"]["center"]["longitude"]
    df = pd.read_json(json.dumps(jdata["businesses"]))
    df.head(2)
    # print(df.head(3))

    # creates an empty map zoomed in Stanford
    print(center_coords)
    working_map = folium.Map(location=center_coords, zoom_start=12)

    # creates a marker cluster
    cluster = MarkerCluster().add_to(working_map)

    # Add markers to cluster, iterating over dataframe
    for index, row in df.iterrows():
        folium.Marker(
            location=[row["coordinates"]["latitude"], row["coordinates"][
                "longitude"]],
            popup="{0}: {1} stars".format(row["name"], row["rating"]),
            icon=folium.Icon(color='green', icon='ok-sign'),
        ).add_to(cluster)

    display(working_map)
    working_map.save(outfile="map.html")


@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception("An error occurred during a request.")
    return "An internal error occurred.", 500

create_map(0, [10, 20])
