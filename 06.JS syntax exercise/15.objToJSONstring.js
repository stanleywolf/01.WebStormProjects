function objToJSON(arr) {
    "use strict";
    let obj={};
    obj.name=arr[0].split(' -> ')[1];
    obj.surname=arr[1].split(' -> ')[1];
    obj.age=Number(arr[2].split(' -> ')[1]);
    obj.grade=Number(arr[3].split(' -> ')[1]);
    obj.date=arr[4].split(' -> ')[1];
    obj.town=arr[5].split(' -> ')[1];
    console.log(JSON.stringify(obj));
}
objToJSON(['name -> Angel','surname -> Georgiev',
    'age -> 20','grade -> 6.00','date -> 23/05/1995',
    'town -> Sofia']);