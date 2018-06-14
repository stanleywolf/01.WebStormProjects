function person(arr) {
    let persons=[];
    for (var i = 0; i < arr.length; i++) {
        let tokens=arr[i].split(" -> ");
        let name=tokens[0];
        let age=tokens[1];
        let grade=tokens[2];

        persons.push({Name:name,Age:age,Grade:grade});
    }
    for(let per of persons) {
        for(let key of Object.keys(per)) {
            console.log(`${key}: ${per[key]}`)
        }
    }
}
person(['Pesho -> 13 -> 6.00','Ivan -> 12 -> 5.57','Toni -> 13 -> 4.90']);