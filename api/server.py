from flask import Flask
from flask_cors import CORS
from flask import request
import tsv_reading
import jsonl_reading

app = Flask(__name__)
CORS(app)
FILENAME = "/Users/aidansan/Documents/fa24/attack/name-swap-data/name_swap_data.jsonl"

@app.route("/get-data")
def get_data():
    data = jsonl_reading.read_jsonl(FILENAME)
    # print(data)
    return {"data": data}

@app.route("/set-data", methods=["POST"])
def set_data():
    data = request.json
    # print(data)
    if data:
        jsonl_reading.write_jsonl(data, FILENAME)
    return "ok"