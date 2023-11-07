import pyjokes
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

# categories = ["all", "neutral", "chuck"]
# languages = ["en", "es", "de"]
# numbers = ["1", "5", "10"]


@app.route('/')
def hello_world():
    return jsonify('Hello, World! I want to tell you a joke!')


@app.route('/v1/jokes/<cat>/<lang>/<num>', methods=['GET'])
def send_jokess(cat, lang):

    jokes = []
 
    jokes.append(pyjokes.get_joke(lang, cat))

    return jsonify(jokes)


@app.route("/jokes")
def send_jokes():
    joke = pyjokes.get_joke("en", "chuck")
    return jsonify(joke)


if __name__ == "__main__":
    app.run()
