export function DateDic(start, end){
    let departureYear = start.getFullYear();
    let departureMonth = start.getMonth() + 1;
    let departureDate = start.getDate();
    let arrivalYear = end.getFullYear();
    let arrivalMonth = end.getMonth() + 1;
    let arrivalDate = end.getDate();
    let startDate = departureYear.toString() + "-" + ("0" + departureMonth).slice(-2) + "-" + ("0" + departureDate).slice(-2);
    let endDate = arrivalYear.toString() + "-" + ("0" + arrivalMonth).slice(-2) + "-" + ("0" + arrivalDate).slice(-2);
    var date = {"start": startDate, "end": endDate};
    return date;
}