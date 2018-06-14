function printReverse(arr) {
    let array=arr.map(Number);
    let revArr=[];
    for (var i = arr.length - 1; i >= 0; i--) {
        revArr.push(arr[i]);
    }
    console.log(revArr.join("\n"))
}

printReverse(["10", "15", "20"])