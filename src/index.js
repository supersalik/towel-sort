// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === undefined) return [];
    else
        return matrix.flat().sort((a, b) => {
            if (a > b) return 1;
            if (a < b) return -1;
        });
};
