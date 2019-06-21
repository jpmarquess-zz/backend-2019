var arrayUtils = {
    isEmpty: function (array) {
        if(array.length == 0) {
            return true;
        } else {
            return false;
        }
    },

    max: function(array) {
        //return Math.max.apply(null, array);
        var max = array[0];

        for(var i = 0; i < array.length; i++) {
            if(array[i] > max) {
                max = array[i];
            }
        }

        return max;
    },

    min: function(array) {
        //return Math.min.apply(null, array);
        var min = array[0];

        for(var i = 0; i < array.length; i++) {
            if(array[i] < min) {
                min = array[i];
            }
        }

        return min;
    },

    average: function(array) {
        var media = 0;

        for(var i = 0; i < array.length; i++) {
            media += array[i] / array.length;
        }

        return media;
    },

    indexOf: function(array, value) {
        var index = -1;
        for (let i = 0; i < array.length; i++) {
            if(array[i] == value){
                index = i;
            }            
        }
        return index;
    },

    // Not Completed
    subArray: function(array, startIndex, endIndex) {

    },

    isSameLength: function(a1, a2) {
        if(a1.length > a2.length) {
            return true;
        }
    },

    reverse: function(array) {
        var pos = array.length-1;
        var result = [];

        for(let i = pos; i >= 0; i--) {
            result.push(array[i]);
        }
        return result;
    },

    swap: function(array, index1, index2) {
        var v1 = array[index1];

        array[index1] = array[index2];
        array[index2] = v1;

        console.log(array);
    },

    contains: function(array, value) {
        // return this.indexOf(array, value) != -1;

        var contains = false;
        for(var i = 0; i < array.length; i++) {
            if(array[i] == value) {
              contains = true;
            }
        }
        return contains;
    },

    concatenate: function(a1, a2) {
        var result = [];

        for (var i = 0; i < a1.length; i++) {
            result.push(a1[i]);
        }

        for (var j = 0; j < a2.length; j++) {
            result.push(a2[j]);
        }

        return result;
    },
};

module.exports = arrayUtils;