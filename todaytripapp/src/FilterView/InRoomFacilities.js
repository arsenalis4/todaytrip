export function InRoomFacilities(){
    const amenities = {"객실스파": 43, "미니바": 50, "와이파이": 47, "욕실용품": 49, "TV": 197, "에어컨": 198, "냉장고": 199, "객실샤워실": 200, "욕조": 201, "드라이기": 202, "다리미": 203, "전기밥솥": 204};
    const amenitiesLis = Object.keys(amenities);
    const lis = [];
    amenitiesLis.forEach((amenity)=>{
        lis.push(
        <div className="checkmarkFlex">
            <div>
                <input name="room" value={"room_" + amenities[amenity]} type="checkbox" />
            </div>
            <div>
                {amenity}
            </div>
        </div>
        )
    })
    
    return lis;
}