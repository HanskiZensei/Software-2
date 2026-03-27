import json

import requests

url = "https://api.chucknorris.io/jokes/random"

try:
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        print(data["value"])
    else:
        print(f"Error: Received status code: {response.status_code}")

except requests.exceptions.RequestException as e:
    print(f"An error occurred: {e}")