export function Hotel(props){
    return(
        <div className='hotelBox'>
          <div className='hotelImage'>
            <div className="ratingFlex">
              <div className="starImage"><img src="img/Group (2).svg" alt="star Image" /></div>
              <div className="hotelRating">{props.hotelRating}</div>
            </div>
            <img src={props.thumbnail} alt="No Image"/>
          </div>
          <div className='hotelInfo'>
            <div className="roomInfo">
                <div className='roomName'>{props.roomName}</div>
                <div className="hotelName">{props.hotelName} - {props.hotelRanking}</div>
                <div className='hotelDistance'>{props.distance}</div>
            </div>
            <div className="moreInfo">
                <div className='roomPrice'>{props.roomPrice.split("/")[0]}</div>
                <div className='moreLink' onClick={()=>{
                  var url = props.moreInfo;
                  window.open(url)
                }}>더보기</div>  
            </div>
          </div>
        </div>
    );
}