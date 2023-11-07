# Ecobites Backend 


## Overview
TBU 


## Initial Setup 
These steps have been completed. You will need to only activate the environment to run the code. 
Visit the [freeCodeCamp for more info](https://www.freecodecamp.org/news/how-to-setup-virtual-environments-in-python/).
Virtualenv is a tool to set up your Python environments. You can install venv to your host Python by running this command in your terminal:
        ```
        pip3 install virtualenv   
        ```

After the project has been set up. Run the following command (start from this step):
         ```python3.<your_python_version> -m venv env```

To check your python version:
        ``` python3 --version```

To activate your virtual environment, run the code below:
        ```source env/bin/activate```

!You donot need to run this step. Generate a text file listing all your project dependencies by running the code below:
        ```pip3 freeze > requirements.txt```



## Running the backend 
Set your directory to your project path 
```cd C:\wamp64\www\ecobites```

Set up the virtual environment 
```python -m venv ecobites```

Activate your virtual environment, run the code below:
        Mac users:```source env/bin/activate```
        Windows users:```.\ecobites\Scripts\activate```


Instead of having to install each dependency one by one, they could just run the code below to install all your dependencies within their own copy of the project:
        ``` ~ pip3 install -r requirements.txt```



Flask needs to know, the .py file to run. So run that command:

         Mac users: ```export FLASK_APP=ecobites.py```
         Windows users: ```set FLASK_APP=ecobites.py```

Flask needs to know the URL to the database:

        Mac users: ```export MONGO_URI=mongodb+srv://ecobites041:aqYZIewe4fg3Lyig@cluster0.u3pvg7m.mongodb.net/```
        Windows users: ```set MONGO_URI=mongodb+srv://ecobites041:aqYZIewe4fg3Lyig@cluster0.u3pvg7m.mongodb.net/```

Install flask cors 
```pip install flask-cors```

To run the application:
         ```flask run```



To deactivate your virtual environment, simply run the following code in the terminal:
         ```~ deactivate```

## WAD2- Ecobites Project
Landing page is the landing_page.html under the Landing_page folder 

The login page and sign up pages can be accessed using the logIn.html and signUp.html inside the loginSignUp folder 

The restaurants filter page that contains restuarent information such as prices ,locations and reviews can be accessed using the rest_filter.html inside the restaurants_filter

Favourite restaurant filter details can be found in the fav_rest_ver2.html inside the saved_fav_restaurant folder 

The restaurant card details can be accessed via the card_details_v2.html inside the restaurant_cards folder 

The mapPointer2.html inside the map folder will show the user's current location and the healthy food restaurant locations

The home page and contact pages can be accessed via index.html and contact.html inside the templates folder

Github link:https://github.com/May-mnaung/ecobites

Steps to run the ecobites web application 
1. Run the backend steps included in the running the backend 
2. Start running your MAMP/WAMP
3. The application should be seen when the file path has been entered in the search bar
4. Start from the landing_page.html
   




