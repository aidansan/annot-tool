import json
import os
import copy

ANNOTATION_DIR = 'annotation_data'
INPUT_FILENAME = "/Users/aidansan/Documents/riv-sharebox/combined_output.jsonl"
SETTING_FILENAME = "/Users/aidansan/Documents/fa24/attack/anntool-starf/my-code/react-flask-app/src/settings/settings.json"

def read_jsonl(input_fname):
    with open(input_fname) as infile:
        return [json.loads(line) for line in infile]

def read_setting_file():
    with open(SETTING_FILENAME) as infile:
        return json.load(infile)

def get_annotation_fname(input_fname):
    assert input_fname.endswith('.jsonl')
    input_fname = os.path.basename(input_fname)
    output_fname = input_fname.replace('.jsonl', '_annotations.jsonl')
    output_fname = os.path.join(ANNOTATION_DIR, output_fname)
    return output_fname

def create_annotation_file(input_fname, setting):
    input_data = read_jsonl(input_fname)

    input_fname = os.path.basename(input_fname)
    output_data = []
    for row in input_data:
        row = copy.deepcopy(row)
        row['annotation'] = [
            field for field in setting['annotation_fields']
        ]
        output_data.append(row)
    output_fname = get_annotation_fname(input_fname)
    with open(output_fname, 'w') as outfile:
        for row in output_data:
            outfile.write(json.dumps(row) + '\n')
    return output_fname
        
