//-------------------------------------------------
//JEDNOHuBKY
//1.
var middle = function (array) {
    var length = array.length;
    if (length === 0) {
        return console.log(-1);
    }
    var isEven = length % 2 === 0;
    var isOdd = length % 2 !== 0;
    var result = 0;
    if (isEven) {
        result = length / 2;
    }
    else if (isOdd) {
        result = (length - 1) / 2;
    }
    return console.log(array[result]);
};
middle([1, 2, 3, 4, 5]);
middle([1, 2, 3, 4, 5, 6, 7]);
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
middle([1, 2, 3, 4]);
middle([]);
//-------------------------------------------------
// Napište funkci fairSplit, která obdrží řetězec rozdělí jej na dvě poloviny. Pokud je délka řetězce lichá, bude první polovina o jeden znak delší. Funkce vrátí pole s dvěma řetězci. Například pro řetězec "TypeScript" vrátíte pole ["TypeS", "cript"].
var fairSplit = function (value) {
    var length = value.length;
    var isEven = length % 2 === 0;
    var halfLength = Math.floor(length / 2);
    if (isEven) {
        return [value.slice(0, halfLength), value.slice(halfLength)];
    }
    return [value.slice(0, halfLength + 1), value.slice(halfLength + 1)];
};
console.log(fairSplit('TypeScript'));
console.log(fairSplit('javscript'));
console.log(fairSplit('tři'));
// //------------------------------------------------
// Napište funkci rotate, která obdrží řetězec, a vrátí nový řetězec, ve kterém jsou všechny znaky posunuty o jedno doprava. Například pro řetězec "TypeScript" vrátíte "pTypeScri".
var rotate = function (value) {
    var letter = value.slice(value.length - 1);
    var remain = value.slice(0, value.length - 1);
    var newString = letter + remain;
    return newString;
};
console.log(rotate('Typescript'));
console.log(rotate('javscript'));
console.log(rotate('tři'));
// //----------------------------------------------------------
// Upravte funkci rotate tak, aby jako druhý parametr přijímala výčtový typ udávající směr rotace. Například pro řetězec "TypeScript" a směr right vrátíte "pTypeScri", pro směr left vrátíte "ypeScripT".
var rotateToSide = function (value, side) {
    var length = value.length;
    if (side === 'right') {
        var letter = value[length - 1];
        var remain = value.slice(0, length - 1);
        return letter + remain;
    }
    if (side === 'left') {
        var letter = value[0];
        var remain = value.slice(1);
        return remain + letter;
    }
    return null;
};
console.log(rotateToSide('Typescript', 'right'));
console.log(rotateToSide('Typescript', 'left'));
