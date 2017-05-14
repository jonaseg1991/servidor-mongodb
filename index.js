'use strict'
//cargamos la libreria
var mongoose = require('mongoose');
var app = require('./app');//cargamos la configuracion de http donde tenemos las rutas y demas.
var port = process.env.PORT || 3977;//puerto por defecto al que vamos a conectar en local si no tenemos configurado el puerto

//conecta a la base de datos con mongoose, parametro recibe el nombre de la base de datos
mongoose.connect('mongodb://localhost:27017/mongodb', (err, res) => {
    if(err){
        throw err;
    }else{//si no da error, muestra el string
        console.log("Base de datos funciona perfectamente");
        
        //Hacemos un oyente para que cargue el port, y lanzamos un console para ver que esta corriendo el servidor
        app.listen(port, function(){
            console.log("Servidor corriendo en http://localhost:"+port);
            //si copiamos la ruta en el explorador de internet, ya podemos conectar a nuestro servidor web
        });
    }
});