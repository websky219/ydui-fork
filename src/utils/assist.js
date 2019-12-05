const pageScroll = (function() {
    const fn = function(e) {
        e.preventDefault();
        e.stopPropagation();
    };
    let islock = false;

    return {
        lock(el) {
            if (islock) return;
            islock = true;
            (el || document).addEventListener("touchmove", fn);
        },
        unlock(el) {
            islock = false;
            (el || document).removeEventListener("touchmove", fn);
        }
    };
})();

const preventScroll = (function(bodyCls) {
    let scrollTop;
    return {
        lock() {
            scrollTop = document.scrollingElement.scrollTop;
            document.body.classList.add(bodyCls);
            document.body.style.top = -scrollTop + "px";
        },
        unlock() {
            document.body.classList.remove(bodyCls);
            document.scrollingElement.scrollTop = scrollTop;
        }
    };
})("g-fix-ios-prevent-scroll");
//此方法完美解决滚动穿透问题

const isIOS = !!((window.navigator && window.navigator.userAgent) || "").match(
    /\(i[^;]+;( U;)? CPU.+Mac OS X/
);

const isColor = function(value) {
    const colorReg = /^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/;
    const rgbaReg = /^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/;
    const rgbReg = /^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;

    return colorReg.test(value) || rgbaReg.test(value) || rgbReg.test(value);
};
const getPos = function(ele) {
    let t = ele.offsetTop;
    while ((ele = ele.offsetParent)) {
        t += ele.offsetTop;
    }
    return t;
};

const getScrollview = function(el) {
    let currentNode = el;
    while (
        currentNode &&
        currentNode.tagName !== "HTML" &&
        currentNode.tagName !== "BODY" &&
        currentNode.nodeType === 1
    ) {
        let overflowY = document.defaultView.getComputedStyle(currentNode)
            .overflowY;
        if (overflowY === "scroll" || overflowY === "auto") {
            return currentNode;
        }
        currentNode = currentNode.parentNode;
    }
    return window;
};

const checkInview = function(scrollView, el) {
    const contentHeight =
        scrollView === window ?
        document.body.offsetHeight :
        scrollView.offsetHeight;
    const contentTop =
        scrollView === window ? 0 : scrollView.getBoundingClientRect().top;

    const post = el.getBoundingClientRect().top - contentTop;
    const posb = post + el.offsetHeight;

    return (
        (post >= 0 && post < contentHeight) || (posb > 0 && posb <= contentHeight)
    );
};

const hasClass = function(elem, cls) {
    cls = cls || "";
    if (cls.replace(/\s/g, "").length === 0 || !elem) return false;
    return new RegExp(" " + cls + " ").test(" " + elem.className + " ");
};

const addClass = function(ele, cls) {
    if (!hasClass(ele, cls)) {
        ele.className = ele.className === "" ? cls : ele.className + " " + cls;
    }
};

const removeClass = function(ele, cls) {
    if (hasClass(ele, cls)) {
        let newClass = " " + ele.className.replace(/[\t\r\n]/g, "") + " ";
        while (newClass.indexOf(" " + cls + " ") >= 0) {
            newClass = newClass.replace(" " + cls + " ", " ");
        }
        ele.className = newClass.replace(/^\s+|\s+$/g, "");
    }
};

const sortBy = (arr, prop, desc) => {
    if (!(arr instanceof Array)) {
        console.error("sortBy Error:", "arr is not an array");
    }
    let newArr = [];
    let props = [];
    let sortNumber = false;

    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        let propData = (item && item[prop]) || "";
        (props[i] = new String(propData))._obj = item;
    }

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i][prop] === "number") {
            sortNumber = true;
            break;
        } else {
            if (typeof arr[i][prop] === "string") {
                sortNumber = false;
                break;
            }
        }
    }
    if (sortNumber) {
        props.sort((a, b) => a - b);
    } else {
        props.sort();
    }

    for (let i = 0; i < arr.length; i++) {
        newArr[i] = props[i]._obj;
    }
    if (desc === "desc") newArr.reverse();
    return newArr;
};

//Copy from iView. https://www.iviewui.com/
const scrollTop = function(el, from = 0, to, duration = 500, callback) {
    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame =
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function(callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
    }
    const difference = Math.abs(from - to);
    const step = Math.ceil((difference / duration) * 50);

    function scroll(start, end, step) {
        if (start === end) {
            typeof callback === "function" && callback();
            return;
        }

        let d = start + step > end ? end : start + step;
        if (start > end) {
            d = start - step < end ? end : start - step;
        }

        if (el === window) {
            window.scrollTo(d, d);
        } else {
            el.scrollTop = d;
        }
        window.requestAnimationFrame(() => scroll(d, end, step));
    }

    scroll(from, to, step);
};

export {
    pageScroll,
    preventScroll,
    isIOS,
    isColor,
    getPos,
    getScrollview,
    checkInview,
    addClass,
    removeClass,
    scrollTop,
    sortBy
};