
//object literals
let Student={
    name: "pragti",
    age: 22,
    city:"pune",
    marks:80,
    greet:function(){
        console.log("hello ...." + Student.name);
    }
}
Student.greet();
console.log(`Student age is ${Student.age}`);

for(let key in Student){
    console.log(`${key} : ${Student[key]}`);  
}

//object constroctor

function Student(id, name, age, city){
    this.id=id;
    this.name=name;
    this.age=age;
    this.city=city;
    this.greet=function(){
        console.log("hello ...." + Student.name);
    }
}