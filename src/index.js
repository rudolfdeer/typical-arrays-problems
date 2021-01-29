exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (min > array[i]) min = array[i];
        }
        return min;
    }
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let max = array[0];
        for (let i = 0; i < array.length; i++) {
            if (max < array[i]) max = array[i];
        }
        return max;
    }
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let sum = array.reduce((acc, val) => {
            return acc + val;
        });
        let res = sum / array.length;
        return res;
    }
};
