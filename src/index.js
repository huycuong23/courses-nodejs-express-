const path = require('path');
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const { engine } = require ('express-handlebars');

const route = require("./routes")
const db = require('./config/db');

//connect to db
db.connect();

const app = express();
const port = 3000
app.use(express.static(path.join(__dirname, 'public')));
//logger
app.use(morgan('combined'));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

app.use(methodOverride("_method"))
//view engine
app.engine('hbs', engine({
  extname: 'hbs',
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, "resources", "views"));

// routes init
route(app);

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})