from flask import Flask
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///tasklist.db' # SQLite database URL
db = SQLAlchemy(app)

class Item(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)

def create_app():
    app = Flask(__name__)
    app.config.from_object("project.config")

    with app.app_context():
        db.create_all()
    return app

if __name__=="__main__":
    app.run(debug=True)



# An active Flask application context is required to make queries and to access db.engine and db.session. This is because the session is scoped to the context so that it is cleaned up properly after every request or CLI command.

# Regardless of how an application is initialized with the extension, it is not stored for later use. Instead, the extension uses Flask’s current_app proxy to get the active application, which requires an active application context.


# Tests
# If you test your application using the Flask test client to make requests to your endpoints, the context will be available as part of the request. If you need to test something about your database or models directly, rather than going through a request, you need to push a context manually.

# Only push a context exactly where and for how long it’s needed for each test. Do not push an application context globally for every test, as that can interfere with how the session is cleaned up.