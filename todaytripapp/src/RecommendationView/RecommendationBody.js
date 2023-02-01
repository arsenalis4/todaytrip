import { FilterBox } from "./FilterBox";
import { HotelList } from "./HotelList";

export function RecommendationBody(props){
    return(
    <div className='listBody'>
       <div className='listBodyHeader'>
          <div className='listHotelHeader'><span className='listHotelHeaderText'>Hotel in</span> {props.region}</div>
          <div className='filterFlex'>
            <div className='filterBoxFlex'>
              <FilterBox text={"거리순"}></FilterBox>
              <FilterBox text={"가격순"}></FilterBox>
            </div>
            <div className='filterIcon'>
              <img src='img/Filter Icon.svg'></img>
            </div>
          </div>
        </div>
        <div className='hotelList'>
          {HotelList(props.data, props.filteredType)}
        </div>
    </div>
    );
}