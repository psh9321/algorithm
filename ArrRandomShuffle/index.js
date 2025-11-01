const params = [1, 2, 3, 4, 5, 6, 7];
/** 배열 랜덤 섞기 */
function RandomShuffle(arr) {
    /** 파라미터로 넘겨 받은 배열까지 변경하지 않기 위해 복사 */
    const result = [...arr];
    for (let i = arr.length - 1; i > 0; i--) {
        /** 0 ~ 1 까지 난 수를 생성하고 (i+1) 을 곱 해서 0 부터 i 까지의 무작위 인덱스를 선택 */
        const j = Math.floor(Math.random() * (i + 1));
        /**
         * 0 ~ 1 까지 난 수를 생성하고 (i+1) 을 곱 해서 0 부터 i 까지의 무작위 인덱스를 선택 후
         * i 위치 의 요소에 j 위치 요소, j 위치 요소에 i 위치 요소를 교환
         * */
        [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
}
