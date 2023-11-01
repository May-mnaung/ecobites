//stars that is linked to fav_rest2 vue.html

const stars_5 = `<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star"></div>`
const stars_45 = `<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star"></div>
<div class="fas fa-star-half"></div>`

if (ratings <0.5){
    display(stars_0)
}
else if (ratings <1){
    display(stars_05)
}

reviewIs5(rating){
    if rating == 5{
        return True
    }
    else {
        return False
    }
}


//filering JS
filterByRating(filteredData){
    apply filtering to the filteredData based on the stars
}


onSubmitFunction(){
    rawData = [everything]
    filteredData = rawData
    for every ticks you have:
        apply filterings to the filderedData based on that tick
        if filtering==cheap{
            filteredData.filterBy(price=$1)
            //the price here is the data variable inside the filteredData
        }
    filterByRatings(filteredData)
}