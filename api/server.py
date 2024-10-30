from flask import Flask
from flask_cors import CORS
from flask import request

app = Flask(__name__)
CORS(app)

@app.route("/get-data")
def get_data():
    return {"data": "Hello, World!"}

@app.route("/set-data", methods=["POST"])
def set_data():
    data = request.json
    print(data)
    return "<p>Hello, World!</p>"