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

latitude = 37.427829
longitude = -122.170214
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


def create_map():
    X, cluster_labels = generate_random_data(latitude, longitude, 1000, 100)

    df = pd.DataFrame(X)
    df.to_csv("geo.csv")

    # Loads data from csv into pandas dataframe
    df = pd.read_csv("geo.csv")
    df.head(2)
    print()

    # Stanford coordinates
    coords = [37.427829, -122.170214]

    # creates an empty map zoomed in Stanford
    stan_map = folium.Map(location=coords, zoom_start=12)

    # creates a marker cluster called “Crime cluster”
    marker_cluster = FastMarkerCluster(df.iloc[:, 1:].values.tolist()).add_to(
        stan_map)

    '''
    # add a marker for each event, add it to the cluster, not the map
    for each in df[:100].iterrows():  # for speed purposes delimited data to 15K
        folium.Marker(location=[each[1]["0"], each[1]["1"]]).add_to(
            marker_cluster)
    '''

    display(stan_map)
    # create HTML interface
    fg = folium.FeatureGroup(name="Active Shooter")

    props = lambda x: {"fillColor": "green" if
    x["properties"]["POP2005"] <= 10000000
    else "orange" if 10000000 < x["properties"]["POP2005"] < 20000000
    else "red"}

    stan_map.add_child(fg)
    '''
    stan_map.add_child(folium.GeoJson(data=open(
        "world_geojson_from_ogr.json", encoding="utf-8-sig").read(),
        name="Population",
        style_function=props))
    '''
    stan_map.add_child(folium.LayerControl())
    stan_map.save(outfile="map.html")


@app.route("/")
def index():
    return render_template("index.html")

@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    logging.exception("An error occurred during a request.")
    return "An internal error occurred.", 500
