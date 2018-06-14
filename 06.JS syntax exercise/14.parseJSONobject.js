function parse(str) {
    for (var i = 0; i < str.length; i++) {
       let par=JSON.parse(str[i]);

        console.log(`Name: ${par.name}`);
        console.log(`Age: ${par.age}`);
        console.log(`Date: ${par.date}`);

    }
}
parse([`{"name":"Gosho","age":10,"date":"19/06/2005"}`,
    `{"name":"Tosho","age":11,"date":"04/04/2005"}`]);