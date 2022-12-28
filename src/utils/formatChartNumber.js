export function formatChartNumber(num) {
    let str = num.toString()
    if(str.length > 12) {
        return str.slice(0, str.length - 12) + '.' + str.slice(str.length - 12, str.length - 10) + "tln"
    }else if(str.length > 9) {
        return str.slice(0, str.length - 9) + '.' + str.slice(str.length - 9, str.length - 7) + "bln"
    }else if(str.length > 6) {
        return str.slice(0, str.length - 6) + '.' + str.slice(str.length - 6, str.length - 4) + "mln"
    }else if(str.length > 3) {
        return str.slice(0, str.length - 3) + '.' + str.slice(str.length - 3, str.length - 1) + "ths"
    }else {
        return str
    }
}