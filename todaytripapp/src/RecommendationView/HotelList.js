import { sortID } from "../Functions/SortID";
import { Hotel } from "./Hotel";

export function HotelList(data, filteredType){
    if (filteredType == null){
      var lis = [];
      data = sortID(data);
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
            lis.push(<Hotel thumbnail={room.thumbnail} hotelName={hotel.hotelName} roomName={room.roomName} distance={hotel.address + "km"} roomPrice={room.roomPrice} moreInfo={hotel.moreInfo}></Hotel>);
        })
      })
      return lis;
    } else if (filteredType == "Distance"){
      var lis = [];
      data = sortID(data);
      data.sort(function(a,b) {
        var aDistance = parseFloat(a.distance);
        var bDistance = parseFloat(b.distance);
  
        return aDistance - bDistance
      });
      data.forEach((hotel)=>{
        var roomInfo = hotel.roomInfo;
        roomInfo.forEach((room)=>{
            lis.push(<Hotel thumbnail={room.thumbnail} hotelName={hotel.hotelName} roomName={room.roomName} distance={hotel.address + "km"} roomPrice={room.roomPrice} moreInfo={hotel.moreInfo}></Hotel>);
        })
      })
  
      return lis;
    }
}