export function FilterBox(props){
    return(
    <div className="filterBox" id={props.text}>
        <div>{props.text}</div>
    </div>
    );
}