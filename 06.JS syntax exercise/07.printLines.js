function printLines(arr) {
    let lines=[];
    let i=0;
    while (true){
        if(arr[i]==="Stop"){
            break;
        }
        lines.push(arr[i]);
        i++;
    }
    console.log(lines.join("\n"));
}
printLines(["Line 1", "Line 2", "Line 3", "Stop"])