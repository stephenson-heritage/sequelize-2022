const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { Sequelize } = require('sequelize');

const context = new Sequelize('lizer', 'root', '', { dialect: 'mariadb' });




const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');


const storage = require('./models');

const contactModel = storage.Contact;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/addbob', async(req, res) => {
    let contacts = null;
    try {
        await contactModel.create({ "first_name": "bob", "last_name": "bobby", "phone_number": "(098) 765-4321" });

        contacts = await contactModel.findAll({ where: { first_name: "bob" } });



    } catch (err) {
        console.log('Unable to connecxt to the database:', err.message)
    }

    res.send(contacts != null ? contacts : "error loading contacts");
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;