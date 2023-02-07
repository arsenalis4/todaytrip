export function Amenities(){
    const amenities = {"피트니스": 41, "수영장": 42, "사우나": 44, "골프장": 45, "레스토랑": 46, "엘레베이터": 112, "라운지": 137, "공용PC": 138, "BBQ": 139, "카페": 141, "공용스파": 184, "족구장": 186, "세미나실": 187, "편의점": 188, "노래방": 189, "주방/식당": 190, "세탁기": 192, "건조기": 193, "탈수기": 194, "주차장": 195, "취사가능": 196, "공용샤워실": 333, "온천": 335, "스키장": 334};
    const amenitiesLis = Object.keys(amenities);
    const lis = [];
    amenitiesLis.forEach((amenity)=>{
        lis.push(
        <div className="checkmarkFlex">
            <div>
                <input name="amenity" value={"amenity_" + amenities[amenity]} type="checkbox" />
            </div>
            <div>
                {amenity}
            </div>
        </div>
        )
    })
    
    return lis;
}