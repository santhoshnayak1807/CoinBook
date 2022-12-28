 export function prettierNumber(num) {
    let str = num.toString()
    if(str.length > 12) {
        return str.slice(0, str.length - 12) + '.' + str.slice(str.length - 12, str.length - 10) + 'T'
    }else if(str.length > 9) {
        return str.slice(0, str.length - 9) + '.' + str.slice(str.length - 9, str.length - 7) + 'B'
    }else if(str.length > 6) {
        return str.slice(0, str.length - 6) + '.' + str.slice(str.length - 6, str.length - 4) + 'M'
    }else if(str.length > 5) {
        return str.slice(0, str.length - 5) + '.' + str.slice(str.length - 5, str.length - 3) + 'K'
    }else if(str.length > 3) {
        return str.slice(0, str.length - 3) + ',' + str.slice(str.length - 3, str.length - 1)
    }else {
        return str
    }
 }