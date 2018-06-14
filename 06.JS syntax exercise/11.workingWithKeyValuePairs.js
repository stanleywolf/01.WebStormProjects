function keyValue(arr) {
let dict={};
    for (var i = 0; i < arr.length; i++) {

        let spliterArr=arr[i].split(' ');
        let command=spliterArr[0];
        let number=spliterArr[1];
        if(spliterArr.length==2){
                dict[command]=number;
        }else if(spliterArr.length==1){
           // if(dict[command] === undefined){
                if(!(dict.hasOwnProperty(command))){
                    //if(command in dict){ za else if
                console.log("None")
            }else{
                console.log(dict[command]);
            }
        }
    }
}
keyValue(['key value','key eulav','test tset','key']);