from flask import Blueprint, url_for, render_template
import json

bp = Blueprint('characterSheet', __name__)

@bp.route('/characterSheet', methods=("GET", "POST"))
def characterSheet():
    with open('charSheetJson.json') as f:
        json_char_dict = json.load(f)

    attacks = json_char_dict["Attacks"]
    features = json_char_dict["Features"]
    savingThrowProficiencies = json_char_dict["SavingThrowProficiencies"]
    checks = json_char_dict["Checks"]
    return render_template('characterSheet.html', attacks=attacks,
                           features=features, checks=checks,
                           savingThrowProficiencies=savingThrowProficiencies)
