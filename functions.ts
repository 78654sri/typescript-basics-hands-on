function twoFer(person:string="you"):string{
    return `one for ${person},one for me`
}

console.log(twoFer("hlo"))


const isLeapYear = (year:number):boolean => {
    if(year%4==0 && year%100!=0){
        return true;
    }else if(year%400===0){
        return true
    }
    return false
}

console.log(isLeapYear(2312))
console.log(isLeapYear(2024))