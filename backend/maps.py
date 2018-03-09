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
from folium.plugins import FastMarkerCluster
import random
import sys
import math
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
from IPython.display import HTML, display
from sklearn.datasets.samples_generator import make_blobs

random.seed(1234)
sns.set(font_scale=1.5)
latitude =
longitude = 12.4551347
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


def create_map(json, center_coords):
    # Loads data from csv into pandas dataframe
    df = pd.read_json(json)
    df.head(2)
    print()

    # creates an empty map zoomed in Stanford
    working_map = folium.Map(location=center_coords, zoom_start=12)

    # creates a marker cluster called “Crime cluster”
    marker_cluster = FastMarkerCluster(df.iloc[:, 1:].values.tolist()).add_to(
        working_map)

    '''
    # add a marker for each event, add it to the cluster, not the map
    for each in df[:100].iterrows():  # for speed purposes delimited data to 15K
        folium.Marker(location=[each[1]["0"], each[1]["1"]]).add_to(
            marker_cluster)
    '''

    display(working_map)
    # create HTML interface
    fg = folium.FeatureGroup(name="Active Shooter")

    props = lambda x: {"fillColor": "green" if
    x["properties"]["POP2005"] <= 10000000
    else "orange" if 10000000 < x["properties"]["POP2005"] < 20000000
    else "red"}

    working_map.add_child(fg)
    '''
    working_map.add_child(folium.GeoJson(data=open(
        "world_geojson_from_ogr.json", encoding="utf-8-sig").read(),
        name="Population",
        style_function=props))
    '''
    working_map.add_child(folium.LayerControl())
    working_map.save(outfile="map.html")


@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception("An error occurred during a request.")
    return "An internal error occurred.", 500
