from flask import Flask, render_template, request
import os
from server.server import MyClass

template_dir = os.path.abspath('')
app = Flask(__name__, template_folder=template_dir,  static_folder="Scripts")


@app.after_request
def add_header(r):
    """
    Add headers to both force latest IE rendering engine or Chrome Frame,
    and also to cache the rendered page for 10 minutes.
    """
    r.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    r.headers["Pragma"] = "no-cache"
    r.headers["Expires"] = "0"
    r.headers['Cache-Control'] = 'public, max-age=0'
    return r


@app.route('/')
def index():
    socketServer = MyClass()
    socketServer.set_inpanel({
        'level': 0,
        'test': 0,
        'im': 0,
        'imdelay': 0
    })
    socketServer.set_quackpanel({
        'state': 0,
        'chnls': 2,
        'blcksz': 0,
        'dbl': 0,
        'id': 10,
        'cllnm': "",
        'srvrnm': "foo.ucsd.edu",
        'reset': 0
    })
    socketServer.set_outpanel({
        'level': 0,
        'reset': 0,
        'mono': 0
    })
    return render_template('index.html')


@app.route("/getUpdate")
def getUpdate():
    socketServer = MyClass()
    return socketServer.get_readouts()


@app.route('/setInput', methods=["POST"])
def sendInputPanel():
    data = dict(request.form)
    print(data)
    socketServer = MyClass()
    socketServer.set_inpanel(data)
    return ('', 200)


@app.route('/setQuack', methods=["POST"])
def sendQuackPanel():
    data = dict(request.form)
    print(data)
    socketServer = MyClass()
    socketServer.set_quackpanel(data)
    return ('', 200)


@app.route('/setOutput', methods=["POST"])
def sendOutputPanel():
    data = dict(request.form)
    print(data)
    socketServer = MyClass()
    socketServer.set_outpanel(data)
    return ('', 200)


def runApp():
    app.run(debug=True, host='0.0.0.0', use_reloader=False)


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
