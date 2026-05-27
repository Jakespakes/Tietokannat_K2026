var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var studentRouter = require('./routes/student');
var courseRouter = require("./routes/course");
var evaluationRouter = require("./routes/evaluation");

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/student', studentRouter);
app.use("/course", courseRouter);
app.use("/evaluation", evaluationRouter);

module.exports = app;
