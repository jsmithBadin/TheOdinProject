let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = [];

for(let i = 0; i < users.length; i++){
    names.push(" "+ users[i].name);
}

alert( names ); // John, Pete, Mary