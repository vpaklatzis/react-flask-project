from flask import Flask, request
import requests 
import os
from dotenv import load_dotenv

load_dotenv(dotenv_path="./.env")

UNSPLASH_URL="https://api.unsplash.com/photos/random"
UNSPLASH_KEY=os.environ.get("UNSPLASH_KEY", "")
DEBUG=bool(os.environ.get("DEBUG", True))

if not UNSPLASH_KEY:
    raise EnvironmentError("Create .env file inside the API folder and write the Unsplash API access key")

app = Flask(__name__)

app.config["DEBUG"] = DEBUG     #To disable debug mode, write DEBUG= in the .env file

@app.route("/new-image")
def new_image():
    word = request.args.get("query")
    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {"query": word}
    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
   
    data = response.json()
    return data

if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5050)