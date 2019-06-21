var array = [];

array.push(
    function() {    
        return "Hello";
    }
);

array.push(
    function() {
        return "World";
    }
);

array.push(
    function() {
        return "1, 2, 3";
    }
);

console.log(array);