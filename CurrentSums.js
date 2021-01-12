const array = [2, 3, 5, 7, 11, 13, 17, 19];

function currentSums(array){
    let result = [];
    let sum = [];
    for(let i = 0; i < array.length; i++){
        result.push(array[i]);
        sum.push(result.reduce((sum, elem) => sum + elem, 0));
    }
    console.log(sum);
};

currentSums(array);

