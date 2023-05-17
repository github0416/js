"use strict";

console.log("this\nis\na \nsample \nES6 \ncode");

function showNumbers(x, y) {
    for (var _len = arguments.length, z = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        z[_key - 2] = arguments[_key];
    }

    console.log(z);
}

showNumbers(1, 2, 3, 4, 5);