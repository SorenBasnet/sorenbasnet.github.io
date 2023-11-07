import pyjokes
from flask import Flask, jsonify, abort
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return jsonify('Hello, World! I want to tell you a joke! Use my API !')


@app.route('/v1/jokes')
def send_jokess(cat, lang):

    
    # jokes = []
    # jokes.append(pyjokes.get_joke(lang, cat))
    # return jsonify(jokes)

    return jsonify("www")
    



@app.route("/jokes")
def send_jokes():
    joke = pyjokes.get_joke("en", "chuck")
    return jsonify(joke)


if __name__ == "__main__":
    app.run()
