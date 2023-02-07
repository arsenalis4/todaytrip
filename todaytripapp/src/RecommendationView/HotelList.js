/*global kakao*/
import { sortID } from "../Functions/sortID";
import { Hotel } from "./Hotel";

export function HotelList(data, filteredType, budget){
    const minBudget = budget.min * 10000;
    const maxBudget = budget.max * 10000;
    if (filteredType == null){
      var lis = [];
      data = sortID(data);
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
          var roomPrice = room.roomPrice;
          var intRoomPrice = parseInt(roomPrice.split("/")[0].split(",").join(""));
          if(minBudget < intRoomPrice && intRoomPrice < maxBudget){
            lis.push(<Hotel hotelRating={hotel.hotelRating} thumbnail={room.thumbnail} hotelName={hotel.hotelName} hotelRanking={hotel.hotelRanking} roomName={room.roomName} distance={hotel.address} roomPrice={room.roomPrice} moreInfo={hotel.moreInfo}></Hotel>);
          }
        })
      })
      return lis;
    } else if (filteredType == "lowprice"){
      var lis = [];
      var reData = [];
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
          var roomPrice = room.roomPrice;
          var intRoomPrice = parseInt(roomPrice.split("/")[0].split(",").join(""));
          if(minBudget < intRoomPrice && intRoomPrice < maxBudget){
            var singleRoomDic = {};
            singleRoomDic["hotelRating"] = hotel.hotelRating;
            singleRoomDic["thumbnail"] = room.thumbnail;
            singleRoomDic["hotelName"] = hotel.hotelName;
            singleRoomDic["hotelRanking"] = hotel.hotelRanking;
            singleRoomDic["roomName"] = room.roomName;
            singleRoomDic["hotelName"] = hotel.hotelName;
            singleRoomDic["distance"] = hotel.address;
            singleRoomDic["roomPrice"] = room.roomPrice;
            singleRoomDic["moreInfo"] = hotel.moreInfo;
            reData.push(singleRoomDic);
          }
        })
      })
      reData.sort(function(a,b) {
        var aPrice = parseFloat(a.roomPrice);
        var bPrice = parseFloat(b.roomPrice);
  
        return aPrice - bPrice
      });
      reData.forEach((room)=>{
        lis.push(<Hotel hotelRating={room.hotelRating} thumbnail={room.thumbnail} hotelName={room.hotelName} hotelRanking={room.hotelRanking} roomName={room.roomName} distance={room.address} roomPrice={room.roomPrice} moreInfo={room.moreInfo}></Hotel>);
      })
  
      return lis;
    } else if (filteredType == "highprice"){
      var lis = [];
      var reData = [];
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
          var roomPrice = room.roomPrice;
          var intRoomPrice = parseInt(roomPrice.split("/")[0].split(",").join(""));
          if(minBudget < intRoomPrice && intRoomPrice < maxBudget){
            var singleRoomDic = {};
            singleRoomDic["hotelRating"] = hotel.hotelRating;
            singleRoomDic["thumbnail"] = room.thumbnail;
            singleRoomDic["hotelName"] = hotel.hotelName;
            singleRoomDic["hotelRanking"] = hotel.hotelRanking;
            singleRoomDic["roomName"] = room.roomName;
            singleRoomDic["hotelName"] = hotel.hotelName;
            singleRoomDic["distance"] = hotel.address;
            singleRoomDic["roomPrice"] = room.roomPrice;
            singleRoomDic["moreInfo"] = hotel.moreInfo;
            reData.push(singleRoomDic);
          }
        })
      })
      reData.sort(function(a,b) {
        var aPrice = parseFloat(a.roomPrice);
        var bPrice = parseFloat(b.roomPrice);
  
        return bPrice - aPrice
      });
      reData.forEach((room)=>{
        lis.push(<Hotel hotelRating={room.hotelRating} thumbnail={room.thumbnail} hotelName={room.hotelName} hotelRanking={room.hotelRanking} roomName={room.roomName} distance={room.address} roomPrice={room.roomPrice} moreInfo={room.moreInfo}></Hotel>);
      })
  
      return lis;
    } else if (filteredType == "ranking"){
      var lis = [];
      data = sortID(data);
      data.sort(function(a,b) {
        var aRating = parseFloat(a.hotelRating);
        var bRating = parseFloat(b.hotelRating);
  
        return bRating - aRating
      });
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
          var roomPrice = room.roomPrice;
          var intRoomPrice = parseInt(roomPrice.split("/")[0].split(",").join(""));
          if(minBudget < intRoomPrice && intRoomPrice < maxBudget){
            lis.push(<Hotel hotelRating={hotel.hotelRating} thumbnail={room.thumbnail} hotelName={hotel.hotelName} hotelRanking={hotel.hotelRanking} roomName={room.roomName} distance={hotel.address} roomPrice={room.roomPrice} moreInfo={hotel.moreInfo}></Hotel>);
          }
        })
      })
  
      return lis;
    }
}