export function StepThree(){
    return(
        <div className="stepBody" id="stepThree">
            <div className="countBudgetFlex">
                <div className="countBudgetInnerFlex">
                    <div className="budgetText">
                        1박당
                    </div>
                    <div className="budgetInputFlex">
                        <div>
                            <input type="text" className="budgetInputBox" id="minBudget"/>
                        </div>
                        <div className="budgetRangeText">
                            ~
                        </div>
                        <div>
                            <input type="text" className="budgetInputBox" id="maxBudget"/>
                        </div>
                    </div>
                    <div className="budgetText">
                        만원
                    </div>
                </div>
            </div>
            <div className="checkPersonTypeFlex">
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        예약 가능
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="canOrderedTrue">
                            예
                        </div>
                        <div className="checkedFalse" id="canOrderedFalse">
                            아니요
                        </div>
                    </div>
                </div>
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        프로모션
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="canPromotionTrue">
                            예
                        </div>
                        <div className="checkedFalse" id="canPromotionFalse">
                            아니요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}