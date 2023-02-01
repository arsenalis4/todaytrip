export function Hotel(props){
    return(
        <div className='hotelBox'>
          <div className='hotelImage'><img src={props.thumbnail} alt="No Image"/></div>
          <div className='hotelInfo'>
            <div className="roomInfo">
                <div className='roomName'>{props.roomName}</div>
                <div className='hotelName'>{props.hotelName}</div>
                <div className='hotelDistance'>{props.distance}</div>
            </div>
            <div className="moreInfo">
                <div className='roomPrice'>{props.roomPrice.split("/")[0]}</div>
                <div className='moreLink'><a href={props.moreInfo}>더보기</a></div>  
            </div>
          </div>
        </div>
    );
}