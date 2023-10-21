from flask import Flask,jsonify   #backend api
from flask_pymongo import PyMongo #library needed for mangodb connect pytohn to db
from credentials import constants   



app = Flask(__name__)    #run backend

# connecting to mongo
app.config["MONGO_URI"] = constants.MONGO_CONNECT   #takes out url that contains(variable in my computer, use the library)
mongodb_client = PyMongo(app)  #connect flask into mongo so that we can use the db
db = mongodb_client.init_app(app, tlsAllowInvalidCertificates=True)  #connect to db
db = mongodb_client.db["restaurants"] #give db object


def fetch_Restaurants() -> object:
    '''
    Queries restaurants dataset from database
    Args:
        None
    Returns:
        cursor (object): queried dataset object address
    '''

    restaurants = list(db.find())
    restaurant_list = []
    for restaurant in restaurants:

        restaurant_dict = {
            "Name": restaurant["Name"]
        }
        restaurant_list.append(restaurant_dict)


    return jsonify(restaurant_list)


    #15-24 call from databse

if __name__ == "__main__":
    # Print all the courses
    # print(fetch_Restaurants())
    pass
