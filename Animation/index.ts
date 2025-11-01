
/** 애니메이션 타겟 엘레멘트 */
type ELEMENT_TARGET = HTMLElement;

/** Fade in or out */
type ANIMATION_TYPE = "in" | "out";

/** 애니메이션 진행 시간 */
type DURATION = number;

/** 애니메이션 종료 시 콜백 */
type END_CALLBACK = () => void | undefined;

/** 애니메이션 슬라이드 진행 방향 */
type DIRECTION = "top" | "right" | "bottom" | "left";

/** Fade In or Out */
function FadeInOutAnimation(element : ELEMENT_TARGET, type : ANIMATION_TYPE, duration : DURATION, endCallback : END_CALLBACK) {
    const start = performance.now();

    function AnimCallback(time : number) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);

        const isIn = type === "in";

        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;

        if(progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if(endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer)
                }, duration);
            }
        }
    }

    requestAnimationFrame(AnimCallback);
    
}

/** Fade In or Out + Scale */
function FadeInOutScaleAnimation(element : ELEMENT_TARGET, type : ANIMATION_TYPE, duration : DURATION, endCallback : END_CALLBACK) {
    const start = performance.now();

    function AnimCallback(time : number) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);

        const isIn = type === "in";

        element.style.transform = `scale(${isIn ? `${progress}` : `${1 - progress}`})`;
        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;

        if(progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if(endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer)
                }, duration);
            }
        }
    }

    requestAnimationFrame(AnimCallback);
}

/** Fade In or Out + Slide */
function FadeInSlideAnimation(element : ELEMENT_TARGET, type : ANIMATION_TYPE, duration : DURATION, direction : DIRECTION, endCallback : END_CALLBACK) {
    const start = performance.now();

    if(!element.style.position) element.style.position = "relative";

    function AnimCallback(time : number) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);

        const isIn = type === "in";
        
        const directionProgress = isIn ? 100 - (progress * 100) : progress * 100;

        element.style[direction] = `-${directionProgress}%`;
        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;

        if(progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if(endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer)
                }, duration);
            }
        }
    }

    requestAnimationFrame(AnimCallback);
}