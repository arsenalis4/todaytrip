export function SubLocation(data, mainLoc){
    if(mainLoc == null){
        return;
    }

    const lis = [];
    const subLoc = data[mainLoc];
    subLoc.forEach((loc)=>{
        lis.push(<div className="subLocation"><div className="subLocationName">{loc}</div></div>);
    })
    return lis;
}