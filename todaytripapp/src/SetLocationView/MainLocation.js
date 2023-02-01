export function MainLocation(data){
    const lis = [];
    const mainLoc = Object.keys(data);
    mainLoc.forEach((loc)=>{
        lis.push(<div className="mainLocation"><div className="mainLocationName">{loc}</div></div>);
    })
    return lis;
}