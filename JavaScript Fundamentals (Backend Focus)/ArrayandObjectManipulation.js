let fruits = ["Apple", "Banana", "Mango", "Orange"];

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

//add 
fruits.push("Pineapple");
console.log("After adding : ",fruits);

//remove
fruits.pop();
console.log("after removing : ", fruits);

//update
fruits[2] = "Papaya",
console.log("After update : ", fruits);


//object 
let student = {
    name : "Jansi",
    age: 21,
    city: "Ahmedabad"
}
console.log(student);

for(let i in student){
    console.log(i , ":" , student[i])
}

//add new key
student.college = "JG College";
console.log(student);

//update
student.age = 20;
console.log("After updating age : ",student);

//delete key
delete student.city;
console.log("After deleting city : ",student);

//array through object 
let users = [
    {id: 1, name: "Jansi"},
    {id: 2, name: "Nency"},
    {id: 3, name: "Dipti"},
]
console.log(users)

for(let i in users){
    console.log(users[i].id, ":", users[i].name)
}