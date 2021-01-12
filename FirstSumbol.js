let str = 'Каждый охотник желает знать, где сидит фазан.';

function getFirstSumbol(str) {
    let array = str.split(' ').map(item => item[0]);
    console.log(array);
};

getFirstSumbol(str);
