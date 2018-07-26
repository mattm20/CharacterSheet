from DicebotApp.functions import rolldX
from flask import Blueprint, url_for, render_template

bp = Blueprint('display', __name__)

@bp.route('/' , methods=('GET', 'POST'))
def display():
	return render_template("dicebot.html")
