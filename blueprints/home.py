from flask import Blueprint, render_template, current_app

home = Blueprint('home', __name__)

@home.route('/', methods=['GET', 'POST'])
def home_index():
    current_app.logger.info('inside bluprint')
    return render_template('home.html')