from flask import Flask
from flask import render_template

app = Flask(__name__)
app.debug = True


@app.route('/', methods=['GET', 'POST'])
def index():
    app.logger.info('currently gramps')
    return render_template('index.html')

if __name__=='__main__':
    app.run()