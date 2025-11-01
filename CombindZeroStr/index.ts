/** 10 이하의 숫자에 0을 붙인 문자열을 리턴 */
function CombindZeroStr(num : number) : string {
    if(isNaN(num)) return "-";
    if(!Number.isInteger(num) || num < 0) return String(num);

    return String(num < 10 ? `0${num}` : num); 
}