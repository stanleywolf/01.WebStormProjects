function addRemove(arr) {
    let list=[];
    for (var i = 0; i < arr.length; i++) {
       let command=arr[i].split(' ');
       let text=command[0];
       let num=Number(command[1]);

       if(text=="add"){
           list.push(num);
       }else if(text=="remove"){
           list.splice(num,1);
       }
    }

    console.log(list.join('\n'));
}
addRemove(['add 3','add 5','remove 1','add 2']);