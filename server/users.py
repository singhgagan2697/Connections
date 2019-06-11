from connection import db

class Users(db.Model):
    id = db.Column('user_id', db.Integer, primary_key = True)
    email = db.Column(db.String(100))
    password = db.Column(db.String(50))

    def __init__(self, email, password):
        self.email = email
        self.password = password

    def __repr__(self):
        return 'Email: %s, Password: %s' % (self.email, self.password) 