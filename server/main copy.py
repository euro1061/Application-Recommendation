from flask import Flask, jsonify, request
from flask_cors import CORS
""" from database import cursor, db """
import pickle
import json
import pandas as pd

""" apps, cosine_overview = pickle.load(open('app.p', 'rb')) """

app = Flask(__name__)
CORS(app)

""" def get_recommendations(title, cosine_sim=cosine_overview):
    list_recommendations = []
    idx = apps[title]
    sim_scores = list(enumerate(cosine_sim[idx]))
    sim_scores = sorted(sim_scores, key=lambda x:x[1], reverse=True)
    sim_scores = sim_scores[1:6]
    app_indics = [i[0] for i in sim_scores]
    for single_app in apps[app_indics].index:
        sql = (f"SELECT * FROM tbl_app WHERE title='{single_app}'")
        print(sql)
        cursor.execute(sql)
        result = cursor.fetchall()
        for row in result:
            list_recommendations.append({
                "id": row[0],
                "title": row[1],
                "developBy": row[2],
                "genre": row[3],
                "price": row[4],
                "rating": row[5],
                "logoApp": row[7]
        })
    return list_recommendations """

@app.route('/', methods=['GET'])
def home():
    return "Hello World"

""" @app.route('/application_fetchone', methods=['GET'])
def application_fetchone():
    if request.method == 'GET':
        id = request.args.get('id')
        sql = (f"SELECT * FROM tbl_app WHERE id='{id}'")
        cursor.execute(sql)
        row = cursor.fetchone()
        list_app = [{"data": {"id": row[0],
            "title": row[1],
            "developBy": row[2],
            "genre": row[3],
            "price": row[4],
            "rating": row[5],
            "description": row[6],
            "logoApp": row[7],
            "Url": row[8]}}]
        list_recomments = get_recommendations(row[1])
        json_res = json.dumps(list_recomments)
        list_app.append({"recom":json_res})
        return jsonify(list_app)

@app.route('/application', methods=['GET'])
def application():
    if request.method == 'GET':
        sql = ("SELECT * FROM tbl_app LIMIT 300")
        list_app = []
        cursor.execute(sql)
        result = cursor.fetchall()
        for row in result:
            list_app.append({
                "id": row[0],
                "title": row[1],
                "developBy": row[2],
                "genre": row[3],
                "price": row[4],
                "rating": row[5],
                "description": row[6],
                "logoApp": row[7],
                "Url": row[8]
            })
        return jsonify(list_app) """