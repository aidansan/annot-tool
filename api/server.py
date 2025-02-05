from flask import Flask
from flask_cors import CORS
from flask import request
import tsv_reading
import jsonl_reading
import json
import utils
import os

app = Flask(__name__)
CORS(app)

SETTING = utils.read_setting_file()

@app.route("/get-data")
def get_data():
    ann_fname = utils.get_annotation_fname(utils.INPUT_FILENAME)
    if not os.path.exists(ann_fname):
        utils.create_annotation_file(utils.INPUT_FILENAME, SETTING)
    data = jsonl_reading.read_jsonl(ann_fname)
    # print(data[:10])
    return {"data": data}

# @app.route("/get-setting")
#     data = 
#     return data

@app.route("/set-data", methods=["POST"])
def set_data():
    data = request.json
    # print(data)
    if data:
        ann_fname = utils.get_annotation_fname(utils.INPUT_FILENAME)
        jsonl_reading.write_jsonl(data, ann_fname)
    return "ok"