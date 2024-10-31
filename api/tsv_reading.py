from datetime import datetime
import shutil

FILENAME = "data.tsv"
FIELDNAMES = ['first_name', 'last_name']

DUMMY_DATA = [
    {"original": "I really love pizza", "gen_1": "I super love pizza", "gen_2": "He really love pizza", "gen_3": "I super like pizza"},
    {"original": "The man chased after the dog in the park", "gen_1": "The man chased after the puppy in the park", "gen_2": "The boy ran after the dog in the park", "gen_3": "The boy ran after the dog in the forest"},
    {"original": "The cat sat on the mat", "gen_1": "The cat sat on the carpet", "gen_2": "The kitten sat on the rug", "gen_3": "Small cat napped on the rug"}
    ]

def get_iso_time():
    now = datetime.now()
    return now.isoformat()

def read_tsv():
    # with open(FILENAME, 'r') as f:
    #     reader = csv.DictReader(f, delimiter='\t')
    #     return [row for row in reader]
    return DUMMY_DATA


def write_tsv(data):
    copy_filename = FILENAME.replace(".tsv", f"_{get_iso_time()}.tsv")
    with open(FILENAME, 'w') as f:
        fieldnames = ['first_name', 'last_name']
        writer = csv.DictWriter(f, delimiter='\t', fieldnames=fieldnames)
        for row in data:
            writer.writerow(row)
    shutil.copyfile(FILENAME, copy_filename)
