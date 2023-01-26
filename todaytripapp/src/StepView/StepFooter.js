export function StepFooter(props){
    return(
        <div className="stepFooter">
            <div className="stepFlex" id={props.beforeId}>
                <div className="stepArrowImage">
                    <img src="img/Arrow 1-1.svg" alt="arrow"/>
                </div>
                <div className="stepText">
                    이전
                </div>
            </div>
            <div className="stepFlex" id={props.afterId}>
                <div className="stepArrowImage">
                    <img src="img/Arrow 1.svg" alt="arrow"/>
                </div>
                <div className="stepText">
                    다음
                </div>
            </div>
        </div>
    )
}