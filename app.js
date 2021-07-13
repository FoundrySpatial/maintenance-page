const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');

const indexRouter = require('./routes/index');

const app = express();

app.set('views', path.join(__dirname, 'views'));
// view engine setup
app.set('view engine', 'njk');
nunjucks.configure('views', {
    autoescape: true,
    express: app,
});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// error handler
app.use((err, req, res) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
