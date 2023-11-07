# from flask import Flask, jsonify 
# from flask_cors import CORS 

# app = Flask(__name__) 
# CORS(app) 

# @app.route("/jokes") 
# def send_jokes(): 
#     return jsonify("data") 

# @app.route("/jokes=<int:number>")
# def send_jokesNum(): 
#     return jsonify("jokes but numberred"); 

# if __name__ == "main": 
#     print("hello")
#     app.run() 

import pyjokes
from flask import Flask, jsonify
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    return jsonify('Hello, World!')


@app.route('/v1/jokes/<en>', methods=['GET'])
def send_jokess(en):
    return jsonify("12345")


@app.route("/jokes")
def send_jokes():
    joke = pyjokes.get_joke("en", "chuck")
    return jsonify(joke)


if __name__ == "__main__": 
    app.run()

