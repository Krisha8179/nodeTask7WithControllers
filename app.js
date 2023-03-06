const path = require('path')
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorController = require('./controllers/error')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactRoutes = require('./routes/contactUs');
const successRoutes = require('./routes/success');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contactRoutes);
app.use(successRoutes);

app.use(errorController.error404);
    

app.listen(4000);

