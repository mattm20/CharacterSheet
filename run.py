from flask import Flask
from DicebotApp import dicebot, characterSheet

app = Flask(__name__)

app.register_blueprint(dicebot.bp)
app.register_blueprint(characterSheet.bp)
