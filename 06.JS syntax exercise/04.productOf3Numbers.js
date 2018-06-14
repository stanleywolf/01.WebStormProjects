function productNumbers(arr) {
    let x=Number(arr[0]);
    let y=Number(arr[1]);
    let z=Number(arr[2]);

    if((x>=0&&y>=0&&z>=0)||(x>=0&&y<0&&z<0)
    ||(x<0&&y<0&&z>=0)||(x<0&&y>=0&&z<0)){
        console.log("Positive")
    }else {
        console.log("Negative")
    }
}
productNumbers(['2','3','-1']);