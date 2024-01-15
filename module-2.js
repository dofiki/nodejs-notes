//using commonJS

add = function(a, b) {
    return a + b;
}

subtract = function(a, b) {
    return a - b;
}

const nameList = ['andy', 'billy', 'carlson'];
const ages = [18,22,24]

module.exports = {
 add,subtract,nameList, ages
}