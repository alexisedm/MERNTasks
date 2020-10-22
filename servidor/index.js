const express = require('express');
const conectarDB = require('./config/db');

//crear el server
const app = express();

//conectar a la base de datos
conectarDB();

//puerto de la app
const PORT = process.env.PORT || 4000;
//importar rutas

app.use('/api/usuarios', require('./routes/usuarios'));  // middleware en express



//arrancar la app
app.listen(PORT, () => {
    console.log(`Èl servidor esta funcionando en el puerto ${PORT}`); 

});
