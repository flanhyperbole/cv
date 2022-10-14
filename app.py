from flask import Flask
from flask import render_template


app = Flask(__name__)
# register all blueprints
from blueprints.home import home
print('grham')
app.register_blueprint(home)

if __name__=='__main__':
    app.run()