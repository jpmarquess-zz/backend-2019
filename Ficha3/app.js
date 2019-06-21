var arrayModule = require('./ArrayUtils.js');

function started() {
    console.log("Started Download");
}

function updated() {
    for(var i = 0; i <= 100; i+=10) {
        console.log(i + "% of Download");
    }    
}

function completed() {
    console.log("Download Completed");
}

function performDownload(started, updated, completed) {
    started();
    updated();
    completed();
}

//performDownload(started, updated, completed);
// console.log(arrayModule.isEmpty([1,2,3,4,5]));
// console.log(arrayModule.max([1,2,3,4,5]));
// console.log(arrayModule.min([1,2,3,4,5]));
// console.log(arrayModule.average([1,2,3,4,5]));
console.log(arrayModule.indexOf([1,2,3,4,5], 3));
// console.log(arrayModule.subArray([1,2,3,4,5], [2,4,5,6]));
// console.log(arrayModule.isSameLength([1,2,3,4,5], [1,2,3,4]));
// console.log(arrayModule.reverse([1,2,3,4,5]));
// console.log(arrayModule.swap([1,2,3], 0,1));
// console.log(arrayModule.contains([1,2,3,4,5], 7));
// console.log(arrayModule.concatenate([5,2,3,4,5], [2,5,6]));