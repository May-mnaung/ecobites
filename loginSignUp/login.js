const root = Vue.createApp({

    data(){
        return {
   
            username_src: "images/user.png",
            password_src: "images/icons8-password-50.png",
            facebook_src: "images/facebook.png",
            google_src: "images/google.png",

            input_wheight: "25",
            fb_wheight: "40",
            g_wheight: "30",
            username: "",
            password: ""
       


        }
    },

    computed: {
        isDisabled(){

            console.log("lolsss")

            return  !(this.username && this.password)
          
    
        },
    },
    methods:{
        login(){
            window.location.href = '../templates/index.html'
        }
    }
        
    
})


root.mount("#rootLogin")