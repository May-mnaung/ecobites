const root = Vue.createApp({

    data(){
        return {
            username: "",
            password: "",

            username_src: "images/user.png",
            password_src: "images/icons8-password-50.png",
            facebook_src: "images/facebook.png",
            google_src: "images/google.png",

            input_wheight: "25",
            fb_wheight: "40",
            g_wheight: "30",
            username_error:"",
            password_error:"",
            error_msg:false
       


        }
    },

    methods: {
        login(){
            console.log(" [Vue] login() ")

            var username_error_msg = '';
            var pass_error_msg = '';

            if (this.username === '') {

                username_error_msg = "<span style='color:red;font-weight:bold'>Please enter username</span>"
            }

            if(this.password === '' || this.password.length <= 6){
                pass_error_msg = "<span style='color:red;font-weight:bold'>Please enter a valid password</span"
            }
        
            if (username_error_msg != '' || pass_error_msg != ''){
                console.log("There's error")
                this.error_msg = true 
                this.username_error = username_error_msg
                this.password_error = pass_error_msg
            } else{
                 window.location.href = '../templates/index.html';
            }  
            
        }
    }
})


root.mount("#rootLogin")