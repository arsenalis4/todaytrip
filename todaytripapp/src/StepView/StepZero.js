export function StepZero(props){
    var subText = props.subText;
    if(subText == null){
        subText = "지역 선택하기";
    }
    
    return(
        <div className="stepBody" id="stepZero">
            <div className="searchLocation" id={props.searchType}>
                {subText}
            </div>
            <div className="searchLocationText">
                또는
            </div>
            <div className="aroundLocation">
                내 주변으로 선택할게요!
            </div>
        </div>
    );
}