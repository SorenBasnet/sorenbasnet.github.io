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

from flask import Flask, jsonify
from flask_cors import CORS 

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return jsonify('Hello, World!')

@app.route("/jokes") 
def send_jokes(): 
    return jsonify("data") 

if __name__ == "__main__": 
    app.run()

