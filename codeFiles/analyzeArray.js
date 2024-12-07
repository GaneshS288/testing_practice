function analyzeArray(array) {
    const average = array.reduce((acc, curr) => acc + curr) / array.length;

    const sortedArr = array.toSorted((a,b) => a - b);

    const max = sortedArr[sortedArr.length - 1];
    const min = sortedArr[0];

    const length = array.length;

    return {average, min, max, length};
}

export default analyzeArray;