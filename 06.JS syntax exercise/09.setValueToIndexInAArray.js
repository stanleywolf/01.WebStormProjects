function setValue(arr) {
    let counter=Number(arr[0]);
    let list=new Array(counter);

    for (var i = 1; i < arr.length; i++) {
        let splitinArr=arr[i].split(" - ");
        let splKey=Number(splitinArr[0]);
        let splValue=Number(splitinArr[1]);

        list[splKey]=splValue;
    }
    for (var i = 0; i < counter; i++) {
        if(list[i]===undefined) {
            console.log(0);
        }else {
            console.log(list[i]);
        }
    }
}
setValue(['5','0 - 3','3 - -1','4 - 2']);