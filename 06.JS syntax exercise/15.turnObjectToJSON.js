function main(lines) {
    let obj={};

    for (let i = 0; i < lines.length; i++) {
        let token=lines[i].split(' -> ');
        if(i==0){
            obj["name"]=token[1];
        }
        else if(i==1){
            obj["surname"]=token[1];
        }
        else if(i==2){
            obj["age"]=Number(token[1]);
        }
        else if(i==3){
            obj["grade"]=Number(token[1]);
        }
        else if(i==4){
            obj["date"]=token[1];
        }
        else if(i==5){
            obj["town"]=token[1];
        }
    }
    console.log(JSON.stringify(obj) );
}
main(['name -> Angel','surname -> Georgiev',
'age -> 20','grade -> 6.00','date -> 23/05/1995',
'town -> Sofia']);