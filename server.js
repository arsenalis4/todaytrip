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
  var isDisabled = req.body.isDisabled;
  var hasPet = req.body.hasPet;
  var canOrdered = req.body.canOrdered;
  var canPromotion = req.body.canPromotion;
  var filteredFacility = req.body.filteredFacility;
  var subLink = "";
  if(isDisabled != null){
    if(isDisabled){
      subLink += "&tmino%5B%5D=336"
    }
  }
  if(hasPet != null){
    if(hasPet){
      subLink += "&tmino%5B%5D=54"
    }
  }
  if(canOrdered != null){
    if(canOrdered){
      subLink += "&reserve%5B%5D=2"
    }
  }
  if(canPromotion != null){
    if(canPromotion){
      subLink += "&promotion%5B%5D=Y"
    }
  }
  if(filteredFacility != null){
    var amenity = filteredFacility.amenity;
    var roomFacility = filteredFacility.room;
    amenity.forEach(element => {
      subLink += `&tmino%5B%5D=${element.split("_")[1]}` 
    });
    roomFacility.forEach(element => {
      subLink += `&tmino%5B%5D=${element.split("_")[1]}` 
    });
  }
  var url = `https://www.goodchoice.kr/product/search/${type}/${location}?sort=HIT&sel_date=${startDate}&sel_date2=${endDate}&persons=${person}${subLink}`;
  getResult(url).then((db)=>{
    res.send(db);
  });
});

app.listen(PORT);  