const express = require('express');
const app = express();
const port = 2200;
const web = require('./route/web');
const connectDB = require('./data base/connect');
const { url } = require('inspector');


app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(express.static('public'));

// connect flash and session
const session = require('express-session')
const flash = require('connect-flash')

// for massages
app.use(session({
    secret: 'secret',
    cookie: { maxAge: 60000 },
    resave: false,
    saveUninitialized: false,
}));
//Flash massage
app.use(flash());

// db
connectDB()

app.use('/', web);
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});