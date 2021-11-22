var app = new Vue ({

    el : "#container", 

    data : {

        arrEmail: [],

    },

    mounted(){

        const self = this;
        
        for ( let i =0; i < 10; i++){

            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function(email){

            self.arrEmail.push(email.data.response)
            
            })

        }
        console.log(this.arrEmail);
    }

})