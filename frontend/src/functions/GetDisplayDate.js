export default function GetDisplayDate (num) {
    let date = new Date();
    let weekdays = [ 'Mon','Tue','Wed','Thu','Fri','Sat','Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun' ]
    let months = [ 'Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ]
    let displayDate = `${weekdays[date.getDay()+(num - 2)]}, ${months[date.getMonth()]} ${date.getDate()+(num - 1)}`
    return(displayDate)
}