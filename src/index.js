// You should implement your task here.

module.exports = function towelSort(matrix) {
    let mR;
    if (matrix === undefined) return [];
    else {
        mR = matrix.map((elem, i) => (i % 2 ? elem.reverse() : elem));
        return mR.flat();
    }
};
