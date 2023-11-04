const root = Vue.createApp({

    data(){
        return {
            // username: "",
            // password: "",

            username_src: "images/user.png",
            password_src: "images/icons8-password-50.png",
            facebook_src: "images/facebook.png",
            google_src: "images/google.png",

            input_wheight: "25",
            fb_wheight: "40",
            g_wheight: "30",
            // username_error:"",
            // password_error:"",
            // error_msg:false,
            // isDisabled: false,
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
    //I will delete this part once everyone confirm they are okay with it 
    // methods: {
   
        //     console.log(" [Vue] login() ")
        //     console.log("lolllll")

        //     var username_error_msg = '';
        //     var pass_error_msg = '';

        //     if (this.username === '') {

        //         this.isDisabled = true
        //         // username_error_msg = "<span style='color:red;font-weight:bold'>Please enter username</span>"
        //     }

        //     if(this.password === '' || this.password.length <= 6){
        //         this.isDisabled = true 
        //         // pass_error_msg = "<span style='color:red;font-weight:bold'>Please enter a valid password</span"
        //     }
        
        //     if (username_error_msg != '' || pass_error_msg != ''){
        //         console.log("There's error")
        //         this.error_msg = true 
        //         this.isDisabled = true 
        //         this.username_error = username_error_msg
        //         this.password_error = pass_error_msg
        //     } else{
        //          window.location.href = '../templates/index.html';
        //     }  
            
        // }
        
    
})


root.mount("#rootLogin")