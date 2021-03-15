
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (Array.isArray(matrix)) {
        let flag = true;
        const arr = matrix.reduce((acc, val) => {
            if (flag) {
                flag = false;
                return acc.concat(val)
            } else {
                flag = true;
                return acc.concat(val.reverse());
            }
        }, [])
        console.log(arr)
        return arr;
    } else {
        return [];
    }
}
