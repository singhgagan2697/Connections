from flask import Flask, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
import os
import json
from connection import db
from users import Users

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + os.path.join('.', '../db/db.sqlite')
db.init_app(app)
CORS(app)

@app.route("/")
def hello():
    return "Hello World!"

#variables example
@app.route('/user/<username>')
def get_user(username):
    return 'Username: %s' % username

@app.route("/user", methods=["GET", "POST"])
def post_user():
    if request.form:
        print(request.form)
    
    data = json.loads(request.data)
    # print(data['email'], flush = True)
    new_user = Users(data['email'], data['password'])
    db.session.add(new_user)
    db.session.commit()
    return "checking form"

@app.route('/post/<int:post_id>')
def get_post(post_id):
    #post_id should be an int
    return str(post_id)

if __name__ == '__main__':
    app.run(debug = True)