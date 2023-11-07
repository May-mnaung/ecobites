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
            g_wheight: "30",

      
        
        }
    },
    computed: {
        isDisabled(){

            return  !(this.username && this.password && this.email)
          
    
        },
    },

    methods: {
       signup(){

        window.location.href = 'logIn.html';

       }
    }
})


root.mount("#rootSignup")