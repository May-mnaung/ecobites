// favorite restaurant function via axios
function favoriteRestaurant(oid) {
    {
        axios.post('http://127.0.0.1:5000/api/restaurant/' + oid, {
            'fav_restaurant': true
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
        axios.post('http://127.0.0.1:5000/api/restaurant/' + oid, {
            'fav_restaurant': false
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




// get restaurants from localhost:5000/api/restaurants
axios.get('http://127.0.0.1:5000/api/restaurants').then(
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
            if (restaurant[i].fav_restaurant == false) {
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



// for loop again to retrieve the restaurants who has fav_restauarant: true
//var fav_restaurantsnArray = [];
axios.get('http://127.0.0.1:5000/api/restaurants').then(
    response => {
        restaurant = response.data
        
for (let i = 0; i < restaurants.length; i++) {
    if (restaurant[i].fav_restaurant == true){
    var title = restaurants[i].Name;
    var res_image = restaurants[i].Image;
    var cuisine = restaurants[i].Cuisine_Foodtype;
    var page = restaurants[i].page_link;
    var address = restaurants[i].Location;
    var postal = restaurants[i].Postal_Code;
    var ratings = restaurants[i].Ratings;
    var price = restaurants[i].Price;
   // fav_restaurantsnArray.push({title, res_image, cuisine, page, address, postal, ratings, price});


   
    const cardContainer = document.getElementById("card-container");

    const cardBox = document.createElement("div");
    cardBox.className = "col";
    const card = document.createElement("div");
    card.className = "card";

    // Create title and content elements
    const cardImage = document.createElement("img");
    cardImage.src = res_image;
    cardImage.className = "card-img-top";
    cardImage.alt = "restaurant";

    const heartBtn = document.createElement("button");
    heartBtn.setAttribute("type", "button");
    heartBtn.className = "btn btn-danger top-0 end-0 position-absolute m-2 rounded-pill";
   // heartBtn.addEventListener("click", function(){
    //  location.href = '../saved_fav_restaurant/favourite.restaurant.html';
   // })

    const heartIcon = document.createElement("i");
    heartIcon.className = "fas fa-heart";
    heartBtn.appendChild(heartIcon);

    const cardBody = document.createElement("div"); // All text will be contained within body
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = title;

    const cardLocation = document.createElement("div");
    cardLocation.className = "cuisine text-muted";
    cardLocation.textContent = address;

    const cardPrice = document.createElement("h5");
    cardPrice.className = "price-cat fw-bold";
    cardPrice.textContent = price;

    const ratings = ratings;
    //console.log(ratings);
    let x = Math.round(ratings*2)/2;;
    console.log(x);

    const rateBox = document.createElement("div");
    rateBox.className = "d-flex";

    const stars = document.createElement("div");
    stars.className = "reviews-stars";

    const checkedone = document.createElement("div");
    checkedone.className = "fas fa-star";
    const checkedtwo = document.createElement("div");
    checkedtwo.className = "fas fa-star";
    const checkedthree = document.createElement("div");
    checkedthree.className = "fas fa-star";
    const checkedfour = document.createElement("div");
    checkedfour.className = "fas fa-star";
    const checkedfive = document.createElement("div");
    checkedfive.className = "fas fa-star";

    const uncheckedone = document.createElement("div");
    uncheckedone.className = "far fa-star";
    const uncheckedtwo = document.createElement("div");
    uncheckedtwo.className = "far fa-star";
    const uncheckedthree = document.createElement("div");
    uncheckedthree.className = "far fa-star";
    const uncheckedfour = document.createElement("div");
    uncheckedfour.className = "far fa-star";
    const uncheckedfive = document.createElement("div");
    uncheckedfive.className = "far fa-star";

    const halfone = document.createElement("div");
    halfone.className = "fas fa-star-half-alt";
    const halftwo = document.createElement("div");
    halftwo.className = "fas fa-star-half-alt";
    const halfthree = document.createElement("div");
    halfthree.className = "fas fa-star-half-alt";
    const halffour = document.createElement("div");
    halffour.className = "fas fa-star-half-alt";
    const halffive = document.createElement("div");
    halffive.className = "fas fa-star-half-alt";

    

    rateBox.appendChild(stars);

    switch (true) {
      case (x==0.5):
        // code block
        stars.appendChild(halfone);
        stars.appendChild(uncheckedtwo);
        stars.appendChild(uncheckedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==1):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(uncheckedtwo);
        stars.appendChild(uncheckedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==1.5):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(halftwo);
        stars.appendChild(uncheckedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==2):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(uncheckedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==2.5):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(halfthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==3):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(checkedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==3.5):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(checkedthree);
        stars.appendChild(halffour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==4):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(checkedthree);
        stars.appendChild(checkedfour);
        stars.appendChild(uncheckedfive);
        break;
      case (x==4.5):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(checkedthree);
        stars.appendChild(checkedfour);
        stars.appendChild(halffive);
        break;
      case (x==5):
        // code block
        stars.appendChild(checkedone);
        stars.appendChild(checkedtwo);
        stars.appendChild(checkedthree);
        stars.appendChild(checkedfour);
        stars.appendChild(checkedfive);
        break;
      default:
        // code block
        stars.appendChild(uncheckedone);
        stars.appendChild(uncheckedtwo);
        stars.appendChild(uncheckedthree);
        stars.appendChild(uncheckedfour);
        stars.appendChild(uncheckedfive);
    }

    // Append title and content to the card
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardLocation);
    cardBody.appendChild(cardPrice);
    cardBody.appendChild(rateBox);
    
    card.appendChild(cardImage);
    card.appendChild(heartBtn);
    card.appendChild(cardBody);
    cardBox.appendChild(card);
    

    // Append the card to the card container
    cardContainer.appendChild(cardBox);

    // let name = document.getElementById("name");
    // name.innerHTML = restaurants[i].Name
    // let location = document.getElementById("location");
    // location.innerHTML = restaurants[i].Location
    // let image = document.getElementById("image");
    // image.src = restaurants[i].Image
    // let price = document.getElementById("price");
    // price.innerHTML = restaurants[i].Price
  }
})
.catch((error) => {
  console.log(error);
});

   
     
    













}















// // for loop again to retrieve the restaurants who has fav_restauarant: true, extract its particular ID
// axios.get('http://127.0.0.1:5000/api/restaurants').then(
//     response => {
//         restaurant = response.data
//         // for loop through all the restaurants to populate the website
//         for (let i = 0; i < restaurant.length; i++) {
//             if (restaurant[i].fav_restaurant == true){
//                 let restaurant_id = restaurant[i]["$oid"]    //tbc for id and oid
//                 const cardContainer = document.getElementById("card-container");

//                 const cardBox = document.createElement("div");
//                 cardBox.className = "col";
//                 const card = document.createElement("div");
//                 card.className = "card";
          
//                 // Create title and content elements
//                 const cardImage = document.createElement("img");
//                 cardImage.src = restaurants[restaurant_id].Image;
//                 cardImage.className = "card-img-top";
//                 cardImage.alt = "restaurant";
          
//                 const heartBtn = document.createElement("button");
//                 heartBtn.setAttribute("type", "button");
//                 heartBtn.className = "btn btn-danger top-0 end-0 position-absolute m-2 rounded-pill";
//                 heartBtn.addEventListener("click", function(){
//                   location.href = '../saved_fav_restaurant/favourite.restaurant.html';
//                 })
          
//                 const heartIcon = document.createElement("i");
//                 heartIcon.className = "fas fa-heart";
//                 heartBtn.appendChild(heartIcon);
          
//                 const cardBody = document.createElement("div"); // All text will be contained within body
//                 cardBody.className = "card-body";
          
//                 const cardTitle = document.createElement("h4");
//                 cardTitle.className = "card-title";
//                 cardTitle.textContent = restaurants[restaurant_id].Name;
          
//                 const cardLocation = document.createElement("div");
//                 cardLocation.className = "cuisine text-muted";
//                 cardLocation.textContent = restaurants[restaurant_id].Location;
          
//                 const cardPrice = document.createElement("h5");
//                 cardPrice.className = "price-cat fw-bold";
//                 cardPrice.textContent = restaurants[restaurant_id].Price;
          
//                 const ratings = restaurants[restaurant_id].Ratings;
//                 //console.log(ratings);
//                 let x = Math.round(ratings*2)/2;;
//                 console.log(x);
          
//                 const rateBox = document.createElement("div");
//                 rateBox.className = "d-flex";
          
//                 const stars = document.createElement("div");
//                 stars.className = "reviews-stars";
          
//                 const checkedone = document.createElement("div");
//                 checkedone.className = "fas fa-star";
//                 const checkedtwo = document.createElement("div");
//                 checkedtwo.className = "fas fa-star";
//                 const checkedthree = document.createElement("div");
//                 checkedthree.className = "fas fa-star";
//                 const checkedfour = document.createElement("div");
//                 checkedfour.className = "fas fa-star";
//                 const checkedfive = document.createElement("div");
//                 checkedfive.className = "fas fa-star";
          
//                 const uncheckedone = document.createElement("div");
//                 uncheckedone.className = "far fa-star";
//                 const uncheckedtwo = document.createElement("div");
//                 uncheckedtwo.className = "far fa-star";
//                 const uncheckedthree = document.createElement("div");
//                 uncheckedthree.className = "far fa-star";
//                 const uncheckedfour = document.createElement("div");
//                 uncheckedfour.className = "far fa-star";
//                 const uncheckedfive = document.createElement("div");
//                 uncheckedfive.className = "far fa-star";
          
//                 const halfone = document.createElement("div");
//                 halfone.className = "fas fa-star-half-alt";
//                 const halftwo = document.createElement("div");
//                 halftwo.className = "fas fa-star-half-alt";
//                 const halfthree = document.createElement("div");
//                 halfthree.className = "fas fa-star-half-alt";
//                 const halffour = document.createElement("div");
//                 halffour.className = "fas fa-star-half-alt";
//                 const halffive = document.createElement("div");
//                 halffive.className = "fas fa-star-half-alt";
          
                
          
//                 rateBox.appendChild(stars);
          
//                 switch (true) {
//                   case (x==0.5):
//                     // code block
//                     stars.appendChild(halfone);
//                     stars.appendChild(uncheckedtwo);
//                     stars.appendChild(uncheckedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==1):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(uncheckedtwo);
//                     stars.appendChild(uncheckedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==1.5):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(halftwo);
//                     stars.appendChild(uncheckedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==2):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(uncheckedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==2.5):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(halfthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==3):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(checkedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==3.5):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(checkedthree);
//                     stars.appendChild(halffour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==4):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(checkedthree);
//                     stars.appendChild(checkedfour);
//                     stars.appendChild(uncheckedfive);
//                     break;
//                   case (x==4.5):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(checkedthree);
//                     stars.appendChild(checkedfour);
//                     stars.appendChild(halffive);
//                     break;
//                   case (x==5):
//                     // code block
//                     stars.appendChild(checkedone);
//                     stars.appendChild(checkedtwo);
//                     stars.appendChild(checkedthree);
//                     stars.appendChild(checkedfour);
//                     stars.appendChild(checkedfive);
//                     break;
//                   default:
//                     // code block
//                     stars.appendChild(uncheckedone);
//                     stars.appendChild(uncheckedtwo);
//                     stars.appendChild(uncheckedthree);
//                     stars.appendChild(uncheckedfour);
//                     stars.appendChild(uncheckedfive);
//                 }
          
//                 // Append title and content to the card
//                 cardBody.appendChild(cardTitle);
//                 cardBody.appendChild(cardLocation);
//                 cardBody.appendChild(cardPrice);
//                 cardBody.appendChild(rateBox);
                
//                 card.appendChild(cardImage);
//                 card.appendChild(heartBtn);
//                 card.appendChild(cardBody);
//                 cardBox.appendChild(card);
                
          
//                 // Append the card to the card container
//                 cardContainer.appendChild(cardBox);
          
//                 // let name = document.getElementById("name");
//                 // name.innerHTML = restaurants[i].Name
//                 // let location = document.getElementById("location");
//                 // location.innerHTML = restaurants[i].Location
//                 // let image = document.getElementById("image");
//                 // image.src = restaurants[i].Image
//                 // let price = document.getElementById("price");
//                 // price.innerHTML = restaurants[i].Price
//             }
//         })
//         .catch((error) => {
//           console.log(error);
//         });
      

















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

