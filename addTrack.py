import json
import sys

request = json.load(sys.stdin)

file_open = open('http://mattprice09.github.io/database.txt', a)
file.write(request)
file.close()
