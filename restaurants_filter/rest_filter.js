axios.get('http://localhost:5000/api/restaurants').then(
    response => {
        restaurant = response.data