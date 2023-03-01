//Requerimos Express, Constante app y Constante path

const express = require ('express');

const app = express ();

const path = require ('path');

// Especificamos la carpeta Publics

const publicpath = path.resolve (__dirname,'./publics')

app.use(express.static(publicpath));

// Levantamos el Servidor

app.listen (process.env.PORT || 3000, ()=>{
    console.log (`Servidor corriendo`)
});

// Definimos las Rutas

app.get ('/', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/index.html'))
});
app.get ('/register', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/register.html'))
});
app.get ('/login', (req,res)=>{
    res.sendFile (path.join(__dirname, 'views/login.html'))
});