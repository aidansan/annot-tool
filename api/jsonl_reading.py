from datetime import datetime
import shutil
import json

def get_iso_time():
    now = datetime.now()
    return now.isoformat()

def read_jsonl(filename):
    with open(filename, 'r') as f:
        return [json.loads(line) for line in f]


def write_jsonl(data, filename):
    copy_filename = filename.replace(".jsonl", f"_{get_iso_time()}.jsonl")
    with open(filename, 'w') as f:
        for row in data:
            f.write(json.dumps(row) + '\n')
    shutil.copyfile(filename, copy_filename)
