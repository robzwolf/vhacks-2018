from flask import Flask

app = Flask(__name__, static_folder="../frontend/public/")


@app.route("/<path:file>")
def static_file(file):
    print("requested:", file)
    return app.send_static_file(file)


@app.route("/")
def hello_world():
    return app.send_static_file("index.html")


if __name__ == '__main__':
    app.run()
