let app = new Vue({
    //donde corre vue
    el:"#container",
    // modelo de datos
    data: {
        email: '',
        password: ''
    },

//metodos
methods :{
    enviar: function(){
        console.log('enviando',this.email,this.password);
        if(this.email == "" || this.password == ""){
        alert ("completa las casillas muerto")
        }
    }
}
})