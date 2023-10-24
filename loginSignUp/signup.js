const root = Vue.createApp({

    data(){
        return{
            username: "",

            password: "",

            email: "",

        }
    },

    methods: {
        signup(){
            console.log("im in!")
            var error_msg = ''

            if(this.username === ''){
                error_msg +='Please enter username.\n'
            }

            if(this.password === '' || password.length <= 6){
                error_msg+="Please enter a valid password.\n"
            }

            if (this.email === '' || !emailRegex.test(email)) {
                error_msg+='Please enter a valid email address.\n'
            }

            if(error_msg != ''){
                alert(error_msg)
                console.log("There's error")
            } else{
                window.location.href = '../templates/index.html';
            }

        }
    }
})

root.mount("#rootSignup")