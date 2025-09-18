
// // alert("js page is lodding...");
// console.log("welcom js web page");

// let a = 10;
// console.log(a);

// var name ="pragti";
// console.log(name);

// const pi =3.14;
// console.log(pi);

// let value = 453536736333n;
// console.log("type of value " + typeof(value));


// Arithamatic operator = +,-,*,/,%

let num1= 30;
let num2 = 20;
console.log(`Addition of ${num1} and ${num2} is : ${num1+num2}`);

console.log("substraction of ",num1,"and ",num2," is: " ,num1-num2);

console.log("multiplication of "+num1+"and "+num2+" is: " , num1*num2);

console.log("dividing of "+num1+"and "+num2+" is: " +num1/num2);
console.log("modul of "+num1+"and "+num2+" is: " +num1%num2);

// Assinment Operator : =,==,===,+=,-=,*=,/=,%=,!=

let a=10;
let b =20;

console.log(a+=b);
console.log(a*=b);
console.log(a-=b);
console.log(a/=b);
console.log(a%=b);

//Comparision Operator (==,===,!=,!==,>,<,>=,<=)

let x =40;
let y =30;
console.log(x>y);
console.log(x<y);
console.log(x>=y);
 console.log(x<=y);


 //unary operator 
 //1. Increment --> a. pre-Increment(++a) b.post-Increment(a++)
 //2. Decrement --> a. pre-Decrement(--a) b.post-Decrement(a--)

 console.log(x++);//40
 console.log(++x);//42
 console.log(x--);//42
 console.log(--x);//40

 //Ternary Operator 

 let age1 = 30;
 let criteria = (age1>=18) ? "valid for vote":"invalid for vote";
 console.log(criteria);

 let num =20;
 let val = (num%2==0) ? "number is even":"number is odd";
 console.log(val);
 
 
 
 //condition ststement

 let n = 30;
 if(n%2==0){
    console.log(`${n} is even`);
 }
 else{
    console.log(`${n} is odd`);   
 }



 let age = 10;

 if((age>=1)&&(age<=18)){
    console.log("not adult");
 }
 else if ((age>18)&&(age<=60)) {
    console.log("adult");
 } 
 else if((age>60)&&(age<=100)){
    console.log("older");
 }
 else{
    console.log("invalid age");
 }
 
 
 
