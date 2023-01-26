const axios = require("axios");
const cheerio = require("cheerio");

async function webScraping(url, selector) {
    let html = await axios.get(url);
    let $ = cheerio.load(html.data);
  
    return $(selector);
}
  
async function RoomScraping(url) {
    let html = await axios.get(url);
    let $ = cheerio.load(html.data);
    var hotelInfo = {};
    var roomInfo = [];
    var hotelName = $("#content > div.top > div.right > div.info > h2").text();
    hotelInfo["hotelName"] = hotelName;
    var roomNameData = $(".room > .title");
    var roomPriceData = $("div.room > div.info > div > div > div > p:nth-child(2)");
    var roomLength = roomNameData.length; 
    for (var i = 0; i < roomLength; i++){
      var singleRoomInfo = {};
      singleRoomInfo["roomName"] = roomNameData[i].children[0].data;
      
      try{
        singleRoomInfo["roomPrice"] = roomPriceData[i].children[0].next.children[0].data;
      } catch{
        singleRoomInfo["roomPrice"] = "다른날짜 확인";
      }
  
      roomInfo.push(singleRoomInfo);
    }
  
    hotelInfo["roomInfo"] = roomInfo;
    return hotelInfo;
}
  
function getRoom(url){
    return webScraping(url, ".list_2.adcno2 > a").then((res)=>{
      var resLength = res.length; 
      const promises = [];
      for (var i = 0; i < resLength; i++){
        var hotel = res[i].next.prev.attribs.href;
        promises.push(RoomScraping(hotel).then((roomRes)=>{
          return roomRes;
        }));
      }
      return Promise.all(promises);
    })
}

function getResult(url){
  console.log(url);
  return getRoom(url).then((res)=> {
    //console.log(res);
    return res;
  });
}

module.exports = { getResult };