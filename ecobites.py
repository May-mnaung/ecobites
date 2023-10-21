from flask import Flask, jsonify, render_template, request, redirect, url_for
import dao, json
app = Flask(__name__)




@app.route('/', methods=['GET'])
def index():
    """
    Render Main Index Page 
    """
    return render_template("/index.html")


@app.route('/restaurants', methods = ['GET'])
def restaurant():
    """
    restaurant Routing 
    """
    restaurants = dao.fetch_Restaurants()
    print(restaurants)
    return json.dumps(restaurants).decode('utf-8')

@app.route('/contact', methods = ['GET'])
def contact():
    """
    Contact Routing 
    """
    return render_template("/contact.html")


if __name__ == "__main__":
    app.run(debug= True)

