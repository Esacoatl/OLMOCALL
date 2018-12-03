
'use strict'

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const app =express();

//importing routes
const deudoresRoutes = require ('./routes/deudores');

//settings
//const port = process.env.PORT || 2828;
app.set('port',process.env.PORT || 2828);
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

//middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{

    connectionLimit: 50,
        host: 'localhost',
        user: 'root',
        pasword: '',
        port: 3306,
        database: 'olmosdb'

},'single'));

app.use(express.urlencoded({extended: false}));

//routes
app.use('/', deudoresRoutes);

//static files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'),()=>{
    console.log('Server on port 2828');
});