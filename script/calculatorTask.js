// calculator
let operator =1;
let val1 = 20;
let val2= 50;
let result;

switch (operator) {
    case 1: result= val1+val2;
        console.log(`addition is : ${result}`);
        break;
    case 2: result= val1-val2;
        console.log(`substraction is : ${result}`);
        break;
    case 3: result= val1*val2;
        console.log(`multiplication is : ${result}`);
        break;
    case 4: result= val1/val2;
        console.log(`divide is : ${result}`);
        break;
    case 5: result= val1%val2;
        console.log(`module is : ${result}`);
        break;
    case 1: let age1 = 30;
     let criteria = (age1>=18) ? "valid for vote":"invalid for vote";
      console.log(criteria);
        break;
    case 1: for(let i=1;i<=10;i++){
        console.log(i*2);
    }
        break;

    default:  console.log("invalid case ");
    
        break;
}