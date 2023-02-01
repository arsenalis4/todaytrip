import { MainLocation } from "./MainLocation";
import { SubLocation } from "./SubLocation";

export function SetLocationBody(props){
    return(
        <div className="setLocationBody">
            <div className="mainLocationBody">
                {MainLocation(props.locData)}
            </div>
            <div className="subLocationBody">
                {SubLocation(props.locData, props.mainLoc)}
            </div>
        </div>   
    );
}