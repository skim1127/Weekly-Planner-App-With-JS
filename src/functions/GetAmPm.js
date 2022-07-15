export default function GetAmPm(num) {
    // if it's anywhere before 12PM
    if (num+1 < 12 ) {
        return `${num+1} AM`
        // If it's exactly 12PM
    } else if (num+1 == 12) {
        return  `${num+1} PM`
        // If it's before 12AM
    } else if (num+1 > 12 && num+1 < 24) {
        return `${num-11} PM`
        // If it's exactly 12AM
    } else if (num+1 == 24) {
        return `${num-11} AM`
    }
}