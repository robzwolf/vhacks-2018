from flask import Flask, request, send_from_directory, jsonify, json, render_template
import folium
from folium.plugins import MarkerCluster
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import json
from IPython.display import HTML, display

sns.set(font_scale=1.5)

app = Flask(__name__, static_url_path='')


def create_map(jdata, center_coords):
    # Loads data from csv into pandas dataframe
    with open("yelp_businesses.json") as f:
        jdata = json.loads(f.read())
        center_coords = jdata["region"]["center"]["latitude"], \
                        jdata["region"]["center"]["longitude"]
    df = pd.read_json(json.dumps(jdata["health"]))
    df.head(2)
    # print(df.head(3))

    # creates an empty map zoomed in Rome
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

    cluster.add_to(working_map)
    display(working_map)
    working_map.save(outfile="map.html")


@app.route("/")
def index():
    return render_template("index.html")


@app.errorhandler(500)
def server_error(e):
    # Log the error and stacktrace.
    # logging.exception("An error occurred during a request.")
    return "An internal error occurred.", 500


create_map(0, [10, 20])
