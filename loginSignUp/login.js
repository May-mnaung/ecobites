const root = Vue.createApp({

    data(){
        return {
            username: "",

            password: "",
        }
    },

    methods: {
        login(){
            console.log(" [Vue] login() ")

            var error_msg = '';

            if (this.username === '') {
                error_msg+='Please enter username.\n'
            }

                
            if(this.password === '' || this.password.length <= 6){
                error_msg+="Please enter a valid password."
            }
        
            if (error_msg != ''){
                alert(error_msg)
                console.log("There's error")
            } else{
                 window.location.href = '../templates/index.html';
            }  
            
        }
    }
})

root.mount("#rootLogin")