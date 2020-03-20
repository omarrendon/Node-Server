const express = require('express');
const app = express();
const morgan = require('morgan');

//Settings
app.set('port', process.env.PORT || 3000);

//Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Routes
app.use(require('./routes/user'));
app.use(require('./routes/movies'));

//Server port
app.listen(app.get('port'), () => {
    console.log(`SERVIDOR EN EL PUERTO ${app.get('port')}`);
});