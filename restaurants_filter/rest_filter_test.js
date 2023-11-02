
//===================yt:filtering note======================
//code for submit btn
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById("submitFilter");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    function updateSubmitButton() {
      const atLeastOneChecked = [...checkboxes].some((checkbox) => checkbox.checked);
      submitButton.disabled = !atLeastOneChecked;
    }
  
    //Function
    function filterAndDisplayRecords() {
      console.log("inside the filter function")
      // Get all the selected checkboxes for price and cuisine
      const selectedPriceCheckboxes = document.querySelectorAll('.price-checkbox:checked');
      const selectedCuisineCheckboxes = document.querySelectorAll('.cuisine-checkbox:checked');
    
      // Extract selected values from the checkboxes
      const selectedPriceValues = Array.from(selectedPriceCheckboxes).map((checkbox) => checkbox.value);
      const selectedCuisineValues = Array.from(selectedCuisineCheckboxes).map((checkbox) => checkbox.id);
    
      // Filter the records based on selected values
      const filteredRecords = restaurants.filter((restaurant) => {
        const priceMatch = selectedPriceValues.length === 0 || selectedPriceValues.includes(restaurant.Price);
        const cuisineMatch = selectedCuisineValues.length === 0 || selectedCuisineValues.includes(restaurant.Cuisine);
    
        // Add additional conditions if you have more filters (e.g., ratings)
        return priceMatch && cuisineMatch;
      });
    
      // Display the filtered records as needed
      console.log(filteredRecords);
      // You can render the matching records or perform any other actions here
    }
  
    submitButton.addEventListener("click", function () {
      console.log("hello")
      // This function will be called when the "Submit" button is clicked.
      if (!submitButton.disabled) {
        // Do something when the button is enabled and clicked
        filterAndDisplayRecords();
      }
    });
  
    checkboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", updateSubmitButton);
    });
  
    // Initial call to set the submit button state
    updateSubmitButton();
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    // Get references to the submit button, clear filter button, and all checkboxes
    const submitButton = document.getElementById("submitFilter");
    const clearFilterButton = document.querySelector("#clearFilterButton");
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
  