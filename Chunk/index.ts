
type PARAMS = number[];

/** 배열 chunk 화  */
function Chunk(arr : PARAMS, length : number) {
    const result = [] as PARAMS[];

    /** i 부터 (i + length) 까지 slice 해야 해서 i 는 1씩 더하는게 아니라 length 씩 더함 */
    for(let i = 0; i < arr.length; i+=length) {
        /** i 부터 (i + length) 까지 파라미터 를 slice */
        const item = arr.slice(i, (i + length));
        result.push(item);
    }

    return result
}

