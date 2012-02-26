/*jslint browser: true*/

'use strict';

var indexOf,
    getElementsByClassName,
    querySelector,
    querySelectorAll;

indexOf = Array.prototype.indexOf ? function (arr, search) {
    return arr.indexOf(search);
} : function (arr, search) {
    var index = -1,
        i,
        len;

    for (i = 0, len = arr.length; i < len; i += 1) {
        if (arr[i] === search) {
            index = i;
            break;
        }
    }

    return index;
};

getElementsByClassName = document.getElementsByClassName ? function (className, root) {
    root = root || document;
    return root.getElementsByClassName(className);
} : function (className, root) {
    var children,
        elements = [],
        i,
        len,
        child,
        classNames;

    root = root || document;
    children = root.getElementsByTagName('*');

    for (i = 0, len = children.length; i < len; i += 1) {
        child = children[i];
        classNames = child.className.split(/\s+/);
        if (indexOf(classNames, className) >= 0) {
            elements.push(child);
        }
    }

    return elements;
};

querySelector = document.querySelector ? function (selector, root) {
    root = root || document;
    return root.querySelector(selector);
} : function (selector, root) {
    var m, element, elements;

    root = root || document;
    m = selector.match(/#([\-_a-zA-Z0-9]+)/);

    if (m) {
        element = document.getElementById(m[1]);
    } else {
        m = selector.match(/\.([\-_a-zA-Z0-9]+)/);
        if (m) {
            elements = getElementsByClassName(m[1]);
            if (elements) {
                element = elements[0];
            }
        }
    }

    return element;
};

querySelectorAll = document.querySelectorAll ? function (selector, root) {
    root = root || document;
    return root.querySelectorAll(selector);
} : function (selector, root) {
    var m, elements;

    root = root || document;
    m = selector.match(/\.([\-_a-zA-Z0-9]+)/);

    if (m) {
        elements = getElementsByClassName(m[1]);
    }

    return elements;
};
