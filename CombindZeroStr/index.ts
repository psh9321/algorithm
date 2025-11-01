/** 10 이하의 숫자에 0을 붙인 문자열을 리턴 */
function CombindZeroStr(num : number) : string {
    if(isNaN(num)) return "-"

    return String(num < 10 ? `0${num}` : num); 
}