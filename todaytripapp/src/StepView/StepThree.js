import { useCallback, useState } from "react";

export function StepThree(props){
    const budget = props.budget;
    const checkOrdered = props.checkOrdered;
    const checkPromotion = props.checkPromotion;
    const minBudget = budget.min;
    const maxBudget = budget.max;
    const [minValue, setMinValue] = useState(minBudget);
    const [maxValue, setMaxValue] = useState(maxBudget);
    const onMinChange = useCallback(e => {
        setMinValue(e.target.value);
    });
    const onMaxChange = useCallback(e => {
        setMaxValue(e.target.value);
    })
    return(
        <div className="stepBody" id="stepThree">
            <div className="countBudgetFlex">
                <div className="countBudgetInnerFlex">
                    <div className="budgetText">
                        1박당
                    </div>
                    <div className="budgetInputFlex">
                        <div>
                            <input type="text" name="budget" className="budgetInputBox" id="minBudget" value={minValue} onChange={onMinChange}/>
                        </div>
                        <div className="budgetRangeText">
                            ~
                        </div>
                        <div>
                            <input type="text" name="budget" className="budgetInputBox" id="maxBudget" value={maxValue} onChange={onMaxChange}/>
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
                        <div className="checkedTrue" id="canOrderedTrue" style={checkOrdered === null ? {'background': 'white', 'color': '#2772B7'} : (checkOrdered === true ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            예
                        </div>
                        <div className="checkedFalse" id="canOrderedFalse" style={checkOrdered === null ? {'background': 'white', 'color': '#2772B7'} : (checkOrdered === false ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            아니요
                        </div>
                    </div>
                </div>
                <div className="checkPersonInnerFlex">
                    <div className="checkText">
                        프로모션
                    </div>
                    <div className="checkFlex">
                        <div className="checkedTrue" id="canPromotionTrue" style={checkPromotion === null ? {'background': 'white', 'color': '#2772B7'} : (checkPromotion === true ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            예
                        </div>
                        <div className="checkedFalse" id="canPromotionFalse" style={checkPromotion === null ? {'background': 'white', 'color': '#2772B7'} : (checkPromotion === false ? {'background': '#2772B7', 'color': 'white'} : {'background': 'white', 'color': '#2772B7'})}>
                            아니요
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}