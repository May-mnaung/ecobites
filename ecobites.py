from flask import Flask, jsonify, render_template, request, redirect, url_for, Response
from flask_cors import CORS, cross_origin
import dao
from bson.json_util import dumps, loads

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


# Backend codes below

# Retrieve all restaurants
@app.route('/api/restaurants', methods = ['GET'])
def get_restaurants():
    """
    restaurant Routing 
    """
    restaurants = dao.get_restaurants()
    return Response(dumps(restaurants), mimetype='application/json')

# Retrieve a single restaurant
@app.route('/api/restaurant/<_id>/<oid>', methods = ['GET'])
def get_restaurant(oid):
    """
    restaurant Routing
    """
    restaurant = dao.get_restaurant(oid)
    return Response(dumps(restaurant), mimetype='application/json')

# Update a single restaurant  
#original ta vertion is @app.route('/api/restaurant/<oid>',
@app.route('/api/restaurant/<_id>/<oid>', methods = ['POST'])
def update_restaurant(oid):
    restaurant = dao.update_restaurant(oid, request.data)
    return Response(dumps(restaurant), mimetype='application/json')





if __name__ == "__main__":
    app.run(debug= True)