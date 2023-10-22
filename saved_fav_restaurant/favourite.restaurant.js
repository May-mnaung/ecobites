// favorite restaurant function via axios
function favoriteRestaurant(oid) {
    {
        axios.post('http://localhost:5000/api/restaurant/' + oid, {
            'liked_restaurants': true
        }).then(
            response => {
                console.log(response.data)
            }
        ).catch(
            error => {
                console.log(error)
            })
    }
}

// unfavorite restaurant function via axios
function unfavoriteRestaurant(oid) {
    {
        axios.post('http://localhost:5000/api/restaurant/' + oid, {
            'liked_restaurants': false
        }).then(
            response => {
                console.log(response.data)
            }
        ).catch(
            error => {
                console.log(error)
            })
    }
}


let restaurant = []

// get restaurants from localhost:5000/api/restaurants
axios.get('http://localhost:5000/api/restaurants').then(
    response => {
        restaurant = response.data
        // for loop through all the restaurants to populate the website
        for (let i = 0; i < restaurant.length; i++) {

            // add a div to the body with the restaurant name
            let div = document.createElement('div')
            div.innerHTML = restaurant[i].Name
            document.body.appendChild(div)

            // // add img
            // let img = document.createElement('img')
            // img.src = restaurant[i].Image
            // document.body.appendChild(img)

            // add a button to like under the restaurant name
            let button = document.createElement('button')
            button.name = restaurant[i]["_id"]["$oid"]
            if (restaurant[i].liked_restaurants == false) {
                button.innerHTML = "Favourite"
                button.onclick = function () {
                    if (button.innerHTML == "Favourite") {
                        favoriteRestaurant(button.name)
                        button.innerHTML = "Unfavourite"
                    } else {
                        unfavoriteRestaurant(button.name)
                        button.innerHTML = "Favourite"
                    }
                }
            } else {
                button.innerHTML = "Unfavourite"
                button.onclick = function () {
                    if (button.innerHTML == "Favourite") {
                        favoriteRestaurant(button.name)
                        button.innerHTML = "Unfavourite"
                    } else {
                        unfavoriteRestaurant(button.name)
                        button.innerHTML = "Favourite"
                    }

                }
            }
            document.body.appendChild(button)
        }
    }
).catch(
    error => {
        console.log(error)
    }
)


// axios.post('http://localhost:5000/api/restaurant/6531369c8cc8218aa1aa13ea', {
//     'liked_restaurants': true
// }).then(
//     response => {
//         console.log(response.data)
//     }
// ).catch(
//     error => {
//         console.log(error)
//     })
//
// axios.get('http://localhost:5000/api/restaurant/6531369c8cc8218aa1aa13ea').then(
//     response => {
//         console.log(response.data)
//     }
// ).catch(
//     error => {
//         console.log(error)
//     }
// )

