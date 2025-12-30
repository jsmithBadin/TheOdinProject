// // Map to Names 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = [];

// for(let i = 0; i < users.length; i++){
//     names.push(" "+ users[i].name);
// }

// alert( names ); // John, Pete, Mary

// // MAP TO OBJECTS
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let usersMapped = [];

// for(let i = 0; i < users.length; i++){
//     let fullNameValue = users[i].name + " " + users[i].surname;
//     let tempObj = {
//         fullName: fullNameValue,
//         id: users[i].id
//     }
//     usersMapped.push(tempObj);
// }

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// //SORT USERS BY AGE
// function sortByAge(arr){
//     console.log(arr[[0]].age);
//     console.log(arr[1].age); 
//     arr.sort( (a, b) => a.age - b.age );
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete


