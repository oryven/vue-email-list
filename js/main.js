var app = new Vue ({

    el = "#container", 

    data : {

        arrEmail: [],

    },

    mounted(){

        const self = this;

        for ( let i =0; arrEmail.lenght <= 10; i++){

            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then(function(email){

            
            })

        }
    }

})