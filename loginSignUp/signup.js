const root = Vue.createApp({

    data(){
        return{
            username: "",
            password: "",
            email: "",

            username_src: "images/user.png",
            password_src: "images/icons8-password-50.png",
            email_src: "images/envelope.png",
            facebook_src: "images/facebook.png",
            google_src: "images/google.png",

            input_wheight: "25",
            fb_wheight: "40",
            g_wheight: "30"
        
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