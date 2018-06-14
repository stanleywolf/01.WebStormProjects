function largestTreeNumbers(input) {
    let array=input.map(Number);
    array.sort((a,b) => b-a);
    let counter=Math.min(3,array.length)
    for (var i = 0; i < counter; i++) {
            console.log(array[i]);

    }
}
largestTreeNumbers(['10','30','15','20','50','5'])