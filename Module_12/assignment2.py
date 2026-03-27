import requests

api_key = "e6bf0366c45b6788f826ffea478b523e"
municipality = input("Enter municipality name: ")

url = "https://api.openweathermap.org/data/2.5/weather"
parameters = {
    "q": municipality,
    "appid": api_key,
    "units": "metric"
}

try:
    response = requests.get(url, params=parameters)

    if response.status_code == 200:
        data = response.json()

        description = data["weather"][0]["description"]
        temp = data["main"]["temp"]

        print(f"Weather in {municipality.capitalize()}: {description}")
        print(f"Temperature: {temp}°C")
    else:
        print(f"Error: {response.status_code}. Make sure your API key is correct. ")
except requests.exceptions.RequestException as e:
    print(f"Connection error: {e} ")