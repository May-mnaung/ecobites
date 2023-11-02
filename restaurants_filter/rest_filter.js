//  Javascript for FilterBar
const filterButton = document.getElementById('filterButton');
const filterBar = document.getElementById('filter-bar');
const cardContainer = document.getElementById('card-container');

filterButton.addEventListener('click', function () {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1209) { // for 983 px
        // Toggle a class to show/hide the filter-bar
        filterBar.classList.toggle('filter-bar-visible');
        if (filterBar.classList.contains('filter-bar-visible')) {
          filterBar.style.width = '100%';
          cardContainer.style.display = 'none';
      } else {
          filterBar.style.width = '';
          cardContainer.style.display = ''; 
      }
    }
});

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});

var stars = document.querySelectorAll('.star a');
stars.forEach((item, index1) => {
item.addEventListener("click", () =>{
    stars.forEach((star,index2) => {
        console.log(index2)
        index1 >= index2 ? star.classList.add('active') : star.classList.remove('active')

    })
})
});
//===================yt:filtering note======================
// JavaScript for DOM manipulation
let filter_restaurants = [];
let submitButtonClicked = false; // Flag to track whether the "Submit" button has been clicked

// Function to fetch data from the server
function fetchData() {
  axios
    .get("http://127.0.0.1:5000/api/restaurants")
    .then((response) => {
      filter_restaurants = response.data;
      console.log(filter_restaurants);
    })
    .catch((error) => {
      console.error("Error fetching data: ", error);
    });
}

// Function to filter and display results based on selected filters
function filterAndDisplayResults() {
  if (!submitButtonClicked) {
    return; // Do not display cards until "Submit" button is clicked
  }
  
  const selectedPrices = Array.from(document.querySelectorAll('input[name="price"]:checked')).map(checkbox => checkbox.value);
  const selectedCuisines = Array.from(document.querySelectorAll('input[name="cuisine"]:checked')).map(checkbox => checkbox.id);
  console.log("Selected cuisines: " + selectedCuisines);
  console.log("Selected prices: " + selectedPrices);

  // Filter the data based on selected filters
  const filteredRestaurants = filter_restaurants.filter((restaurant) => {
    if (
      (selectedPrices.length === 0 || selectedPrices.includes(restaurant.Price)) &&
      (selectedCuisines.length === 0 || selectedCuisines.includes(restaurant.Cuisine_Foodtype))
    ) {
      return true;
    }
    return false;
  });
  console.log("Filtered restaurants: ", filteredRestaurants);

  // Clear existing results
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = '';

  // Loop through filtered restaurants to populate the website
  for (let i = 0; i < filteredRestaurants.length; i++) {

    // add a div to the body with the restaurant name

    const cardContainer = document.getElementById("card-container");

    const cardBox = document.createElement("div");
    cardBox.className = "col";
    cardBox.id = "item-card";
    const card = document.createElement("div");
    card.className = "card";


    // Create title and content elements
    const cardImage = document.createElement("img");
    cardImage.src = filteredRestaurants[i].Image;

    //sihua add on this few lines 62-65:
    cardImage.addEventListener("click", function(){
      location.href = '../restaurant_cards/card_details.html';
        })

    cardImage.className = "card-img-top";
    cardImage.alt = "restaurant";

    const heartButtonContainer = document.createElement('div');
    heartButtonContainer.className = 'heart-button';
    heartButtonContainer.id = filteredRestaurants[i]["_id"]["$oid"];

    // Create the heart icon (i element)
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fas fa-heart';

    //Append the heart icon to the heart button container
    heartButtonContainer.appendChild(heartIcon);
    heartButtonContainer.addEventListener('click', function() {
      if (this.classList.contains("clicked")) {
        this.classList.remove('clicked');
      axios.post('http://127.0.0.1:5000/api/restaurant/' + this.id, {
          fav_restaurant: false
      }).then(
          response => {
              console.log(response.data)
          }
      ).catch(
          error => {
              console.log(error)
          })
      } else {
        this.classList.add('clicked');
        
        
      axios.post('http://127.0.0.1:5000/api/restaurant/' + this.id, {
          fav_restaurant: true
      }).then(
          response => {
              console.log(response.data)
          }
      ).catch(
          error => {
              console.log(error)
          })
          filteredRestaurants[i].fav_restaurant= true
      }
    } )
    const cardBody = document.createElement("div"); // All text will be contained within body
    cardBody.className = "card-body";

    const cardTitle = document.createElement("h4");
    cardTitle.className = "card-title";
    cardTitle.textContent = filteredRestaurants[i].Name;

    const cardLocation = document.createElement("div");
    cardLocation.className = "location text-muted";
    cardLocation.textContent = filteredRestaurants[i].Location;

    const cardPrice = document.createElement("h5");
    cardPrice.className = "price-cat fw-bold";
    cardPrice.textContent = filteredRestaurants[i].Price;

    const ratings = filteredRestaurants[i].Ratings;
    //console.log(ratings);
    let x = Math.round(ratings*2)/2;;
    console.log(x);

    const rateBox = document.createElement("div");
    rateBox.className = "d-flex";

    const stars = document.createElement("div");
    stars.className = "reviews-stars";

    const checkedone = document.createElement("div");
    checkedone.className = "fas fa-star";
    checkedone.id = "1star"
    const checkedtwo = document.createElement("div");
    checkedtwo.className = "fas fa-star";
    checkedone.id = "2star"
    const checkedthree = document.createElement("div");
    checkedthree.className = "fas fa-star";
    checkedthree.id = "3star"

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
    card.appendChild(heartButtonContainer);
    card.appendChild(cardBody);
    cardBox.appendChild(card);

    cardContainer.appendChild(cardBox);


    }
}

// Add event listeners to your checkboxes to call filterAndDisplayResults
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", filterAndDisplayResults);
});

// Add an event listener for the "Submit" button
const submitButton = document.getElementById("submitFilter");
submitButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Set the flag to indicate the "Submit" button has been clicked
  submitButtonClicked = true;

  // Call the filterAndDisplayResults function to update results based on selected filters
  filterAndDisplayResults();
});

// Initial call to fetch data and display results
fetchData();



   





//code for refresh button
document.addEventListener("DOMContentLoaded", function () {
  // Get references to the submit button, clear filter button, and all checkboxes
  const submitButton = document.getElementById("submitFilter");
  const clearFilterButton = document.querySelector(".refresh-button");
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  // Function to check if at least one checkbox is checked
  function updateSubmitButton() {
    const atLeastOneChecked = [...checkboxes].some((checkbox) => checkbox.checked);
    submitButton.disabled = !atLeastOneChecked;
  }

  // Add an event listener to each checkbox
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateSubmitButton);
  });

  // Event listener for the "Clear Filter" button
  clearFilterButton.addEventListener("click", function () {
    // Uncheck all checkboxes
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Trigger the updateSubmitButton function to recheck the button state
    updateSubmitButton();
  });

  // Initial call to set the submit button state
  updateSubmitButton();
});
  
//=====================filtering note end===============

// Javscript for DOM manipulation
let restaurants = [];

// get restaurants from localhost:5000/api/restaurants
axios
  .get("http://127.0.0.1:5000/api/restaurants")
  .then((response) => {
    restaurants = response.data;
    console.log(restaurants)
    // for loop through all the restaurants to populate the website
    for (let i = 0; i < restaurants.length; i++) {

            // add a div to the body with the restaurant name

        const cardContainer = document.getElementById("card-container");

        const cardBox = document.createElement("div");
        cardBox.className = "col";
        cardBox.id = "item-card";
        const card = document.createElement("div");
        card.className = "card";


        // Create title and content elements
        const cardImage = document.createElement("img");
        cardImage.src = restaurants[i].Image;

        //sihua add on this few lines 62-65:
        cardImage.addEventListener("click", function(){
          location.href = '../restaurant_cards/card_details.html';
            })

        cardImage.className = "card-img-top";
        cardImage.alt = "restaurant";

        const heartButtonContainer = document.createElement('div');
        heartButtonContainer.className = 'heart-button';
        heartButtonContainer.id = restaurants[i]["_id"]["$oid"];

       // Create the heart icon (i element)
        const heartIcon = document.createElement('i');
        heartIcon.className = 'fas fa-heart';

        //Append the heart icon to the heart button container
        heartButtonContainer.appendChild(heartIcon);
        heartButtonContainer.addEventListener('click', function() {
          if (this.classList.contains("clicked")) {
            this.classList.remove('clicked');
           axios.post('http://127.0.0.1:5000/api/restaurant/' + this.id, {
              fav_restaurant: false
          }).then(
              response => {
                  console.log(response.data)
              }
          ).catch(
              error => {
                  console.log(error)
              })
          } else {
            this.classList.add('clicked');
             
            
           axios.post('http://127.0.0.1:5000/api/restaurant/' + this.id, {
              fav_restaurant: true
          }).then(
              response => {
                  console.log(response.data)
              }
          ).catch(
              error => {
                  console.log(error)
              })


            
            restaurants[i].fav_restaurant= true
          }
         } )
        const cardBody = document.createElement("div"); // All text will be contained within body
        cardBody.className = "card-body";

        const cardTitle = document.createElement("h4");
        cardTitle.className = "card-title";
        cardTitle.textContent = restaurants[i].Name;

        const cardLocation = document.createElement("div");
        cardLocation.className = "location text-muted";
        cardLocation.textContent = restaurants[i].Location;

        const cardPrice = document.createElement("h5");
        cardPrice.className = "price-cat fw-bold";
        cardPrice.textContent = restaurants[i].Price;

        const ratings = restaurants[i].Ratings;
        //console.log(ratings);
        let x = Math.round(ratings*2)/2;;
        console.log(x);

        const rateBox = document.createElement("div");
        rateBox.className = "d-flex";

        const stars = document.createElement("div");
        stars.className = "reviews-stars";

        const checkedone = document.createElement("div");
        checkedone.className = "fas fa-star";
        checkedone.id = "1star"
        const checkedtwo = document.createElement("div");
        checkedtwo.className = "fas fa-star";
        checkedone.id = "2star"
        const checkedthree = document.createElement("div");
        checkedthree.className = "fas fa-star";
        checkedthree.id = "3star"

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
        card.appendChild(heartButtonContainer);
        card.appendChild(cardBody);
        cardBox.appendChild(card);
 
        cardContainer.appendChild(cardBox);


    }
  })
  .catch((error) => {
    console.log(error);
  });

