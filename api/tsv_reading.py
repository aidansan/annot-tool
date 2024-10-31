from datetime import datetime
import shutil

FILENAME = "data.tsv"
FIELDNAMES = ['first_name', 'last_name']

DUMMY_DATA = [
    {"original": "I really love pizza", "paraphrase": "I super love pizza", "name": "gen_1", "is_paraphrase": True, "notes": []},
    {"original": "I really love pizza", "paraphrase": "He really love pizza", "name": "gen_2", "is_paraphrase": True, "notes": []},
    {"original": "I really love pizza", "paraphrase": "I super like pizza", "name": "gen_3", "is_paraphrase": True, "notes": []},
    {"original": "The man chased after the dog in the park", "paraphrase": "The man chased after the puppy in the park", "name": "gen_1", "is_paraphrase": True, "notes": []},
    {"original": "The man chased after the dog in the park", "paraphrase": "The boy ran after the dog in the park", "name": "gen_2", "is_paraphrase": True, "notes": []},
    {"original": "The man chased after the dog in the park", "paraphrase": "The boy ran after the dog in the forest", "name": "gen_3", "is_paraphrase": True, "notes": []},
    {"original": "The cat sat on the mat", "paraphrase": "The cat sat on the carpet", "name": "gen_1", "is_paraphrase": True, "notes": []},
    {"original": "The cat sat on the mat", "paraphrase": "The kitten sat on the rug", "name": "gen_2", "is_paraphrase": True, "notes": []},
    {"original": "The cat sat on the mat", "paraphrase": "Small cat napped on the rug", "name": "gen_3", "is_paraphrase": True, "notes": []},
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
