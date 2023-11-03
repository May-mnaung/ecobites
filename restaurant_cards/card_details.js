const params = new URLSearchParams(location.search);
const restaurantId = params.get("id");

const root = Vue.createApp({
    data() {
        return {
            restaurantId: restaurantId,
            restaurant: null, // An object
            foodType: "",
            vegan: "",
            vegetarian: "",
            cuisines: "",
        };
    },
    created() {
        // Fetch detailed restaurant information using Axios
        // You can make an Axios request to your API here to get restaurant details.
        // Example:
        axios.get(`http://localhost:5000/api/restaurant/${restaurantId}`)
            .then(response => {
                this.restaurant = response.data;
                this.foodType = response.data.Cuisine_Foodtype;
                
                
            })
            .catch(error => {
                console.error('Error fetching restaurant details:', error);
            });
    },

    methods: {
        is_vegan() {
            if (this.foodType.toLowerCase().includes('vegan')) {
                this.vegan = 'Vegan';
                return true;
            }
        },
        is_vegetarian(){
            if (this.foodType.toLowerCase().includes('vegetarian')) {
                this.vegetarian = 'Vegetarian';
                return true;

            }
        },

        has_cuisines(){
            // 1. 'American'  2. '[American, Vegan]'
            // Remove Vegan & Vegetarian & [] brackets
            const cuisines_str = this.foodType
                .replace(/\bVegetarian\b,?\s*/gi, '') 
                .replace(/\bVegan\b,?\s*/gi, '') 
                .replace('[','')
                .replace(']','')
            console.log(cuisines_str)

            
            if(cuisines_str.length !== 0){
                this.cuisines = cuisines_str;
                console.log(this.cuisines);
                return true
            }
        }
    }
})

root.component('title-component', {

    props: [ 'name', 'ratings', 'price'],

    template: `
        <div class="d-flex justify-content-start">
            <h1 class="resName me-3">
                {{ name }}
            </h1>

            <div class="d-flex justify-content-center rating">
                <div class="star bi-star-fill"></div>
                <div class="ratingNum ps-2 pt-2">
                    {{ ratings }}
                </div>
            </div>
        </div> 

        <div class="row">
            <div class="price justify-content-end ">
                <h1>{{ price }}</h1>
            </div>
        </div>
    `
})

root.component('image-component', {

    props: ['image'],

    template: `
    <div class="col-sm-12 col-lg-6">
        <div class="image-wrapped">
            <img src="restaurant_image_background.png" class="base-image">
            <img :src="image" class="overlay-image">
        </div>
    </div>
    `
})

root.mount("#restaurant-details");
