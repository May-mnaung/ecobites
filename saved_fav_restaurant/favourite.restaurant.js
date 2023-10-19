function click_liked_button() {

    console.log("**** [START]  *****")

   

    // 1) Complete the endpoint URL with gender appended as a parameter
    let api_endpoint_url = ""

    // 2) Use Axios to call API asynchronously
    axios.get(api_endpoint_url)
    .then(response => {

        // SUCCESS
        // Got an API response


    })
    .catch(error => {

        // ERROR
        // Something went wrong
        console.log(error.message)
    })

    console.log("**** [END] *****")
}