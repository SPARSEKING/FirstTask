    function swap(array) {
        let newArray;
        let constElem;
        if (array.length % 2 != 0){
            let removed = array.splice(0,array.length / 2);
            constElem = array.splice(0, 1);
            newArray = array.concat(constElem);
            newArray = newArray.concat(removed);
            console.log(newArray)
            return newArray;
        }
            let removed = array.splice(0,array.length / 2);
            newArray = array.concat(removed);
            console.log(newArray);
            return newArray;
    }

    swap([1,2]);