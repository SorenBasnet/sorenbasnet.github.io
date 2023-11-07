import json
import pyjokes
from flask import Flask, jsonify
from flask_cors import CORS
from werkzeug.exceptions import HTTPException


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return jsonify('Hello, World! I want to tell you a joke! Use my API !')


@app.route('/v1/jokes/<lang>/<cat>/<num>', methods=['GET'])
def send_jokess(cat, lang):

    jokes = []

    jokes.append(pyjokes.get_joke(lang, cat))

    return jsonify(jokes)


@app.route("/jokes")
def send_jokes():
    joke = pyjokes.get_joke("en", "chuck")
    return jsonify(joke)


@app.errorhandler(HTTPException)
def handle_exception(e):
    """Return JSON instead of HTML for HTTP errors."""
    # start with the correct headers and status code from the error
    response = e.get_response()
    # replace the body with JSON
    response.data = json.dumps({
        "code": e.code,
        "name": e.name,
        "description": e.description,
    })
    response.content_type = "application/json"
    return response


if __name__ == "__main__":
    app.run()
