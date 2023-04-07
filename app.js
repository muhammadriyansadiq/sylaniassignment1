// 1. Write a JavaScript program that accepts two numbers in two prompts and
// displays the larger one in the console.

let a = +prompt("Enter your firrst number");
let b = +prompt("Enter your second number");
if(a>b){
    console.log(a)
}
else{
    console.log(b)
}


// 2. Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.


var c = +prompt("Enter number either positive or negative")
if(c>0){
    alert(c + " The sign is + ")
}
else if(c<0){
    alert(c + " The sign is - ")
}
else{
    alert(c + "0")
}


//3.Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.

let one = +prompt("enter your number");
let two = +prompt("enter your number");
let three = +prompt("enter your number");
let four = +prompt("enter your number");
let five = +prompt("enter your number");

let six = Math.max(one,two,three,four,five);
console.log("The larges number is " + six);



//4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.

for ( let i=0;i<=15;i++){
    if (i % 2 ===0){
        console.log(i + " is even")
    // continue;
    }
    else{
        console.log(i + " is odd")
    }
}


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let i=1;i<=100;i++){
    if(i % 3===0 && i % 5===0){
       console.log( "fizzbuzz")
    }
    else if(i % 3===0){
        console.log("fizz")
     }
     else if( i % 5===0){
        console.log("buzz")
         }
     else{
        console.log(i)
     }    
}



// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop



for( var a=1;a<=5;a=a+1){
    for (var b=1;b<=a;b=b+1){
      document.write("*");
    }
    document.write("<br>")
   }

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.

let x = +prompt("enter the average marks of students")
if(x<100 && x>=90){
   console.log("A grade");
}
else if(x<90 && x>=80){
   console.log("B grade");
}
else if(x<80 && x>=70){
   console.log("C grade");
}
else if(x<70 && x>=60){
   console.log("D grade");
}
else if(x<60 && x>=1){
   console.log("F grade");
}

