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
First activate your virtual environment, run the code below:
        ```source env/bin/activate```


Instead of having to install each dependency one by one, they could just run the code below to install all your dependencies within their own copy of the project:
        ``` ~ pip3 install -r requirements.txt```



Flask needs to know, the .py file to run. So run that command:

         Mac users: ```export FLASK_APP=ecobites.py```
         Windows users: ```set FLASK_APP=ecobites.py```

Flask needs to know the URL to the database:

        Mac users: ```export MONGO_URI=<your_mongo_uri>```
        Windows users: ```set MONGO_URI=<your_mongo_uri>```
        

To run the application:
         ```flask run```



To deactivate your virtual environment, simply run the following code in the terminal:
         ```~ deactivate```
