import $ from 'jquery';

export function StepOne(props){
    const checkDisabled = props.checkDisabled;
    const checkPet = props.checkPet;
    return(
        <div className="stepBody" id="stepOne">
            <div className="countPersonFlex">
                <div className="countInnerFlex">
                    <div className="countImage">
                        <img src="img/man.svg" alt="adult"/>
                    </div>
                    <div className="countFlex">
                        <div className="countText">
                            성인 <span id="adultNum">{props.adult}</span>명
                        </div>
                        <div className="arrowFlex">
                            <div className="arrowImage" id="adultUp" onClick={()=>{
                                var adultNum = parseInt($("#adultNum").text());
                                var childNum = parseInt($("#childNum").text());
                                var personNum = adultNum + childNum;
                                if(personNum < 4){
                                    adultNum += 1;
                                    $("#adultNum").text(adultNum);
                                } else{
                                    alert("인원 수는 4명까지 가능합니다.")
                                }
                            }}>
                                <img src="img/Group 60.svg" alt="up"/>
                            </div>
                            <div className="arrowImage" id="adultDown" onClick={()=>{
                                var adultNum = parseInt($("#adultNum").text());
                                var childNum = parseInt($("#childNum").text());
                                var personNum = adultNum + childNum;
                                if(personNum > 0 && adultNum > 0){
                                    adultNum -= 1;
                                    $("#adultNum").text(adultNum);
                                } else{
                                    alert("인원 수는 1명 이상부터 가능합니다.");
                                }
                            }}>
                                <img src="img/Group 61.svg" alt="down"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="countInnerFlex">
                    <div className="countImage">
                        <img src="img/baby-boy.svg" alt="adult"/>
                    </div>
                    <div className="countFlex">
                        <div className="countText">
                            아동 <span id="childNum">{props.child}</span>명
                        </div>
                        <div className="arrowFlex">
                            <div className="arrowImage" id="childUp" onClick={()=>{
                                var adultNum = parseInt($("#adultNum").text());
                                var childNum = parseInt($("#childNum").text());
                                var personNum = adultNum + childNum;
                                if(personNum < 4){
                                    childNum += 1;
                                    $("#childNum").text(childNum);
                                } else{
                                    alert("인원 수는 4명까지 가능합니다.")
                                }
                            }}>
                                <img src="img/Group 60.svg" alt="up"/>
                            </div>
                            <div className="arrowImage" id="childDown" onClick={()=>{
                                var adultNum = parseInt($("#adultNum").text());
                                var childNum = parseInt($("#childNum").text());
                                var personNum = adultNum + childNum;
                                if(personNum > 0 && childNum > 0){
                                    childNum -= 1;
                                    $("#childNum").text(childNum);
                                } else{
                                    alert("인원 수는 1명 이상부터 가능합니다.");
                                }
                            }}>
                                <img src="img/Group 61.svg" alt="down"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkPersonTypeFlex">
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        장애인 동반
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="isDisabledTrue" style={checkDisabled === null ? {'background': 'white', 'color': '#2772B7'} : (checkDisabled === true ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            예
                        </div>
                        <div className="checkedFalse" id="isDisabledFalse" style={checkDisabled === null ? {'background': 'white', 'color': '#2772B7'} : (checkDisabled === false ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            아니요
                        </div>
                    </div>
                </div>
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        애견 동반
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="hasPetTrue" style={checkPet === null ? {'background': 'white', 'color': '#2772B7'} : (checkPet === true ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            예
                        </div>
                        <div className="checkedFalse" id="hasPetFalse" style={checkPet === null ? {'background': 'white', 'color': '#2772B7'} : (checkPet === false ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            아니요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}