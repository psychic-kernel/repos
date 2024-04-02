from flask import Blueprint, render_template, request, flash, redirect, url_for, url_has_allowed_host_and_scheme
from .models import user
from werkzeug.security import generate_password_hash, check_password_hash
# import hashlib
from passlib.hash import pbkdf2_sha256 as hashfunc

from flask_login import LoginManager

from . import db # from __init__.py => import db
from flask_login import login_user, login_required, logout_user, current_user
# from ..main import login_manager


auth = Blueprint("auth", __name__)

# @login_manager
@auth.route("/login")
def login():
    # return render_template("login.html", boolean=True)
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter_by(email=email).first()
        if user:
            if check_password_hash(user.password, password):

                flash("Logged in successfully!", category="success")
                login_user(user, remember=True)
                return redirect(url_for("views.home"))
            else:
                flash("Incorrect password, try again.", category="error")
        else:
            flash("Email does not exist.", category="error")
    return render_template("login.html", user=current_user)

# @login_manager
@auth.route("/logout")
def logout():
    logout_user()
    return redirect(url_for("auth.login"))
    # return render_template("logout.html")

# @login_manager
@auth.route("/create_signup", methods=["GET", "POST"])
def sign_up():
    # return render_template("sign-up.html")
    if request.method == "POST":
        email = request.form.get("email")
        firstname = request.form.get('firstName')
        password1 = request.form.get('password1')
        password2 = request.form.get('password2')
        
    
        user = user.query.filter_by(email=email).first()
        if user:
            flash("Email already exists.", category="error")
        elif len(email) < 4:
            flash('Email must be greater than 3 characters.', category='error')
        elif len(firstname) < 2:
            flash('First name must be greater than 1 character.', category='error')
        elif password1 != password2:
            flash('Passwords don\'t match.', category='error')
        elif len(password1) < 7:
            flash('Password must be at least 7 characters.', category='error')
        else:
            # generate the hash for password
            hashed = hashfunc.hash(password1)
            print(hashed)
            # password=generate_password_hash(password1, method=)
            new_user = user(email=email, firstname=firstname, password=hashed )
            db.session.add(new_user)
            db.session.commit()
            login_user(new_user, remember=True)
            flash("Account created", category="success")
            # return redirect(url_for("views.home"))
            login_user(new_user)

            next = flask.request.args.get("next")
            if not url_has_allowed_host_and_scheme(next, request.host):
                return flask.abort(400)
            
            return flask.redirect(next or flask.url_for("views.home"))
        return flask.render_template("login.html", form=form)

      
        
        # return render_template("sign-up.html", user=current_user)
    else:
        return render_template("sign-up.html", user=current_user)