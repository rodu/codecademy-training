/* global converter */
var
tests = [
    converter.toEuro(1, 1) === 1,
    converter.toUSDollars(1, 1) === 1,
    converter.toEuro(0.723916, 10) === 7.24,
    converter.toUSDollars(0.723916, 7.24) === 10
];

return tests.every(function(el){
    "use strict";
    return el;
});
