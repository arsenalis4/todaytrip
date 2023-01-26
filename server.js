const express = require('express');
const app = express();
const path = require("path");
const PORT = 3000;
const { getResult } = require('./GetRoom');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'todaytripapp/build')));

app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname, 'todaytripapp/build/index.html'));
});

app.post('/trip', function(req,res){
  var type = req.body.type;
  var location = req.body.location;
  var person = req.body.person;
  var calendar = req.body.calendar;
  var startDate = calendar.start;
  var endDate = calendar.end;
  var budget = req.body.budget;
  //var minBudget = budget.min;
  //var maxBudget = budget.max;
  var url = `https://www.goodchoice.kr/product/search/${type}/${location}?sort=HIT&sel_date=${startDate}&sel_date2=${endDate}&persons=${person}`;
  getResult(url).then((db)=>{
    res.send(db);
  });
});

app.listen(PORT);  