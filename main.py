import subprocess
import os
import webserver
import webbrowser


def openBrowser():
    webbrowser.open("http://localhost:5000/", new=0)


pdFile = os.path.abspath("pd/quacktrip.pd")


subprocess.run(['start', pdFile], shell=True)
openBrowser()
webserver.runApp()
