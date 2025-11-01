"use strict";
/** Fade In or Out */
function FadeInOutAnimation(element, type, duration, endCallback) {
    const start = performance.now();
    function AnimCallback(time) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);
        const isIn = type === "in";
        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;
        if (progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if (endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer);
                }, duration);
            }
        }
    }
    requestAnimationFrame(AnimCallback);
}
/** Fade In or Out + Scale */
function FadeInOutScaleAnimation(element, type, duration, endCallback) {
    const start = performance.now();
    function AnimCallback(time) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);
        const isIn = type === "in";
        element.style.transform = `scale(${isIn ? `${progress}` : `${1 - progress}`})`;
        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;
        if (progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if (endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer);
                }, duration);
            }
        }
    }
    requestAnimationFrame(AnimCallback);
}
/** Fade In or Out + Slide */
function FadeInSlideAnimation(element, type, duration, direction, endCallback) {
    const start = performance.now();
    if (!element.style.position)
        element.style.position = "relative";
    function AnimCallback(time) {
        const calcTime = time - start;
        const progress = Math.min(calcTime / duration, 1);
        const isIn = type === "in";
        const directionProgress = isIn ? 100 - (progress * 100) : progress * 100;
        element.style[direction] = `-${directionProgress}%`;
        element.style.opacity = isIn ? `${progress}` : `${1 - progress}`;
        if (progress < 1) {
            requestAnimationFrame(AnimCallback);
        }
        else {
            if (endCallback) {
                const timer = setTimeout(() => {
                    endCallback();
                    clearTimeout(timer);
                }, duration);
            }
        }
    }
    requestAnimationFrame(AnimCallback);
}
