import { Amenities } from "./Amenities";
import { InRoomFacilities } from "./InRoomFacilities";

export function FilterBody(){
    return(
        <div className="filterBody">
            <div className="amenities">
                <div className="filterText">부대 시설</div>
                <div className="filterGrid">
                    {Amenities()}
                </div>
            </div>
            <div className="amenities">
                <div className="filterText">객실 내 시설</div>
                <div className="filterGrid">
                    {InRoomFacilities()}
                </div>
            </div>                     
        </div>
    )
}