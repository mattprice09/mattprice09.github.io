import json
import sys

request = json.load(sys.stdin)

file_open = open(database.txt, a)
file.write(request)
file.close()
