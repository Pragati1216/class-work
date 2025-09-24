
// // // alert("js page is lodding...");
// // console.log("welcom js web page");

// // let a = 10;
// // console.log(a);

// // var name ="pragti";
// // console.log(name);

// // const pi =3.14;
// // console.log(pi);

// // let value = 453536736333n;
// // console.log("type of value " + typeof(value));


// // Arithamatic operator = +,-,*,/,%

// let num1= 30;
// let num2 = 20;
// console.log(`Addition of ${num1} and ${num2} is : ${num1+num2}`);

// console.log("substraction of ",num1,"and ",num2," is: " ,num1-num2);

// console.log("multiplication of "+num1+"and "+num2+" is: " , num1*num2);

// console.log("dividing of "+num1+"and "+num2+" is: " +num1/num2);
// console.log("modul of "+num1+"and "+num2+" is: " +num1%num2);

// // Assinment Operator : =,==,===,+=,-=,*=,/=,%=,!=

// let a=10;
// let b =20;

// console.log(a+=b);
// console.log(a*=b);
// console.log(a-=b);
// console.log(a/=b);
// console.log(a%=b);

// //Comparision Operator (==,===,!=,!==,>,<,>=,<=)

// let x =40;
// let y =30;
// console.log(x>y);
// console.log(x<y);
// console.log(x>=y);
//  console.log(x<=y);


//  //unary operator 
//  //1. Increment --> a. pre-Increment(++a) b.post-Increment(a++)
//  //2. Decrement --> a. pre-Decrement(--a) b.post-Decrement(a--)

//  console.log(x++);//40
//  console.log(++x);//42
//  console.log(x--);//42
//  console.log(--x);//40

//  //Ternary Operator 

//  let age1 = 30;
//  let criteria = (age1>=18) ? "valid for vote":"invalid for vote";
//  console.log(criteria);

//  let num =20;
//  let val = (num%2==0) ? "number is even":"number is odd";
//  console.log(val);
 
 
 
//  //condition ststement

//  let n = 30;
//  if(n%2==0){
//     console.log(`${n} is even`);
//  }
//  else{
//     console.log(`${n} is odd`);   
//  }



//  let age = 10;

//  if((age>=1)&&(age<=18)){
//     console.log("not adult");
//  }
//  else if ((age>18)&&(age<=60)) {
//     console.log("adult");
//  } 
//  else if((age>60)&&(age<=100)){
//     console.log("older");
//  }
//  else{
//     console.log("invalid age");
//  }
 
 

//  switch case
// let day=1;
// switch (day) {
//    case 1: console.log("monday");
//       break;

//       case 2: console.log("Tuseday");
//       break;
//       case 3: console.log("Wensday");
//       break;
//       case 4: console.log("Thursday");
//       break;
//       case 5: console.log("friday");
//       break;
//       case 6: console.log("saturday");
//       break;
//    default: console.log("invalid day");
   
//       break;
// }
 

//Loop 
// 1. For oop

// for(let i=1;i<=10;i++){
//    console.log(i*2);
   
// }



//Function --> function is block of code to perform a specific task.
//it runs when it is called/invoked.
//uses : 1)resusability 2) Avoid repetition of code 3)break complex code into smaller parts 4) easy to test and debug
//syntax --> function function_name(){}

//function declaration
function greet() {
    console.log("hello, Good Morning");
}
greet();
greet();//function calling


function add() {
    console.log("hello perfom add function"); 
}
function add(){
    let num1=20;
    let num2=30;
    console.log(`addition is ${num1+=num2}`);
}

//add(); is overriden, always latest function will be cinsiedered
add();



// function with parameters 

function hello(username) {
    console.log(`hello... ${username}`);
}
hello("Pragati");


//evenOdd Example using function
function evenOddCheck(number) {
  if (number%2==0) {
    console.log(`${number} is Even`);
  }

  else{
    console.log(`${number} is Odd`);
  }
}

evenOddCheck(45);
evenOddCheck(88);


//return type with no parameter
function str() {
    return "hello I an Pragati";
}
let s=str();
console.log(s);


//return type with parameter
function addition(n1, n2){
    return n1+n2;
}

let sum = addition(20,50);
console.log(sum);


// parameter with default value

function defualtValue(name ="pragati") {
    console.log(`My name is ${name}`);
}
defualtValue("Aniket ");


//Rest Parameter

function numbers(...num) {
    console.log(num);
    
}
numbers(12,3,4,57,5,3,9);



//function in function

// function outer(){

//     function inner() {
//         console.log("i am inner function");
        
//     }
//     inner();
//     console.log(" i am outer function");
// }
// outer();


// with parameter
function outer(age){

    function inner(name) {
        console.log("i am inner function with prameter" +name);
        
    }
    inner("Pragati");
    console.log("my  age is "+age);
}
outer(22);