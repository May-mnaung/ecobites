//  Javascript for FilterBar
const filterButton = document.getElementById('filterButton');
const filterBar = document.getElementById('filter-bar');

filterButton.addEventListener('click', function () {
    console.log(window.innerWidth);
    if (window.innerWidth <= 1043) { // for 983 px
        // Toggle a class to show/hide the filter-bar
        filterBar.classList.toggle('filter-bar-visible');
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






// Javscript for DOM manipulation
let restaurant = [];

// get restaurants from localhost:5000/api/restaurants
axios
  .get("http://127.0.0.1:5000/api/restaurants")
  .then((response) => {
    restaurants = response.data;

    // for loop through all the restaurants to populate the website
    for (let i = 0; i < restaurants.length; i++) {
      // add a div to the body with the restaurant name

      const cardContainer = document.getElementById("card-container");

      const cardBox = document.createElement("div");
      cardBox.className = "col";
      const card = document.createElement("div");
      card.className = "card";

      // Create title and content elements
      const cardImage = document.createElement("img");
      cardImage.src = restaurants[i].Image;
      cardImage.className = "card-img-top";
      cardImage.alt = "restaurant";

      const heartBtn = document.createElement("button");
       //may's orginal code
      //heartBtn.setAttribute("type", "button");
      //heartBtn.className = "btn btn-danger top-0 end-0 position-absolute m-2 rounded-pill";
      //heartBtn.addEventListener("click", function(){
      //location.href = '../saved_fav_restaurant/favourite.restaurant.html';

      //const heartIcon = document.createElement("i");
      //heartIcon.className = "fas fa-heart";
      //heartBtn.appendChild(heartIcon);


      //hearticon is the heart inside the circle




      //sihua add on
      const heartBtn = document.createElement("button")
      const img = document.createElement("img");
      img.src = 'whiteHeart.png'
      img.classList.add("red")
      heartBtn.appendChild(img)
      documenet.appendChild(button)
      heartBtn.addEventListener("click", function(){
        // location.href = '../saved_fav_restaurant/favourite.restaurant.html';
        if(heartBtn.classList.contains('red')){
          heartBtn.classList.remove('red');
          heartBtn.classList.add('white');
          heartBtn.src = 'white_heart.png';
      }else{
        heartBtn.classList.remove('white');
        heartBtn.classList.add('red');
        heartBtn.src = 'heart.png';
        
    }

      })



      //<div class="wrapper">
     //<a class="a-heart" href="#"><img src="redHeart.png" id="heart" class="red"></a>
    //<div></div>

    



     //continue may code


      const cardBody = document.createElement("div"); // All text will be contained within body
      cardBody.className = "card-body";

      const cardTitle = document.createElement("h4");
      cardTitle.className = "card-title";
      cardTitle.textContent = restaurants[i].Name;

      const cardLocation = document.createElement("div");
      cardLocation.className = "cuisine text-muted";
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



  function change_heart_color(){

  }

  