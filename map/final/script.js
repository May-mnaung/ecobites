function initMap() {
    // Replace 'YOUR_API_KEY' with your actual Google Maps API key
    var apiKey = 'AIzaSyB-T9te52AnjFsOMZFIj3fZn90moHFfrM0';

    // The location to center the map
    var myLatLng = { lat: 37.7749, lng: -122.4194 }; // Replace with your desired coordinates

    // Create a map object and specify the DOM element for display.
    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 12 // You can adjust the zoom level as needed
    });

    // Create a marker and set its position.
    var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'Hello, World!'
    });
}
