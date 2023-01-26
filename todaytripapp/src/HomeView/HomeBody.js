export function HomeBody(){
    return(
        <div className="homeBody">
            <div className="homeBodyFirstItem">
                <div className="homeBodySlogan">숙소 추천</div>
                <div className="homeBodyName">TodayTrip</div>
            </div>
            <div className="homeBodySecondItem">
                <div className="homeBodySelector" id="hotelSelector">
                    <div>Hotel/Resort</div>
                </div>
                <div className="homeBodySelector" id="pensionSelector">
                    <div>Pension</div>
                </div>
                <div className="homeBodySelector" id="motelSelector">
                    <div>Motel</div>
                </div>
            </div>
        </div>
    )
}