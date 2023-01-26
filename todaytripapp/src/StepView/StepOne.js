export function StepOne(){
    return(
        <div className="stepBody" id="stepOne">
            <div className="countPersonFlex">
                <div className="countInnerFlex">
                    <div className="countImage">
                        <img src="img/man.svg" alt="adult"/>
                    </div>
                    <div className="countFlex">
                        <div className="countText">
                            성인 <span id="adultNum">0</span>명
                        </div>
                        <div className="arrowFlex">
                            <div className="arrowImage" id="adultUp">
                                <img src="img/Group 60.svg" alt="up"/>
                            </div>
                            <div className="arrowImage" id="adultDown">
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
                            아동 <span id="childNum">0</span>명
                        </div>
                        <div className="arrowFlex">
                            <div className="arrowImage" id="childUp">
                                <img src="img/Group 60.svg" alt="up"/>
                            </div>
                            <div className="arrowImage" id="childDown">
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
                        <div className="checkedTrue" id="isDisabledTrue">
                            예
                        </div>
                        <div className="checkedFalse" id="isDisabledFalse">
                            아니요
                        </div>
                    </div>
                </div>
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        애견 동반
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="hasPetTrue">
                            예
                        </div>
                        <div className="checkedFalse" id="hasPetFalse">
                            아니요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}