from flask import Flask, render_template

#app = Flask(__name__, static_folder="./") #"../frontend/public/")
app = Flask(__name__, template_folder='../templates')

#@app.route("/<path:file>")
#def static_file(file):
#    print("requested:", file)
#    return app.send_static_file(file)


@app.route("/")
def index(): 
    import os; print(os.getcwd())
    return render_template("map.html")
    #return app.send_static_file("maps.html")
    #return app.send_static_file("index.html")

if __name__ == '__main__':
    app.run(debug=True)
