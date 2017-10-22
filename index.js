const express = require('express');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
const routes = require('./config/routes');
const expressLayouts = require('express-ejs-layouts');

const app = express();

//Settings

app.set('view engine', 'ejs');
app.set('views',`${__dirname}/views`);

//Middleware
app.use(morgan('dev'));
app.use(express.static(`${__dirname}/public`));
app.use(routes);
app.use(expressLayouts);

//Listen to port
app.listen(port, () => console.log(`Express is listening to port ${port}`));