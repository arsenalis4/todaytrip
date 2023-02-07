import { useNavigate } from "react-router-dom";
import { FilterBox } from "./FilterBox";
import { HotelList } from "./HotelList";

export function RecommendationBody(props){
    const navigate = useNavigate();
    return(
    <div className='listBody'>
       <div className='listBodyHeader'>
          <div className='listHotelHeader'><span className='listHotelHeaderText'>Hotel in</span> {props.region}</div>
          <div className='filterFlex'>
            <div className='filterBoxFlex'>
              <FilterBox text={"저가순"}></FilterBox>
              <FilterBox text={"고가순"}></FilterBox>
              <FilterBox text={"별점순"}></FilterBox>
            </div>
            <div className='filterIcon'>
              <img src='img/Filter Icon.svg'></img>
            </div>
          </div>
        </div>
        <div className='hotelList'>
          {HotelList(props.data, props.filteredType, props.budget)}
        </div>
    </div>
    );
}