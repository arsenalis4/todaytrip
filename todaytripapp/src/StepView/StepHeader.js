export function StepHeader(props){
    return(
        <div className="stepHeader">
            <div className="stepHeaderItem">
                <div className="stepHeaderSlogan">STEP {props.step}</div>
                <div className="stepHeaderDescription">{props.description}</div>
            </div>
        </div>
    )
}