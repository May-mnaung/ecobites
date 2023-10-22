from flask import Flask
from flask_pymongo import PyMongo
from credentials import constants
from bson.objectid import ObjectId
from ast import literal_eval
import json



app = Flask(__name__)

# connecting to mongo
app.config["MONGO_URI"] = constants.MONGO_CONNECT
mongodb_client = PyMongo(app)
db = mongodb_client.init_app(app, tlsAllowInvalidCertificates=True)
db = mongodb_client.db

## old method
def fetch_Restaurants() -> object:
    '''
    Queries restaurants dataset from database
    Args:
        None
    Returns:
        cursor (object): queried dataset object address
    '''
    restaurants = db.restaurants.find()
    return restaurants

# get all restaurants from database
def get_restaurants() -> object:
    '''
    Queries restaurants dataset from database
    Args:
        None
    Returns:
        cursor (object): queried dataset object address
    '''
    restaurants = db.restaurants.find()
    return restaurants

# get a single restaurant from database
def get_restaurant(oid) -> object:
    # body is a JSON object
    #     "_id": {
    #                   "$oid": "6531369c8cc8218aa1aa13ea"
    #               },
    '''
    Queries restaurants dataset from database
    Args:
        None
    Returns:
        cursor (object): queried dataset object address
    '''
    restaurant = db.restaurants.find_one({"_id": ObjectId(oid)})
    return restaurant

# update a single restaurant from database
def update_restaurant(oid, data) -> object:
    # body is a JSON object
    # {"liked_restaurants": true}
    '''
    Queries restaurants dataset from database
    Args:
        None
    Returns:
        cursor (object): queried dataset object address
    '''

    data = json.loads(data)
    print(data)
    restaurant = db.restaurants.update_one({"_id": ObjectId(oid)}, {"$set": data})
    return "success"


if __name__ == "__main__":
    # Print all the courses
    # print(fetch_Restaurants())
    pass