// const score =99;
// console.log(score);

// const balance =new Number(100);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

// console.log(balance.toFixed(2)); // 100.00
//  // Timming 2:35:00
//  //const otherNumber =23.8966; // 23.9
//  //const otherNumber =123.8966;  //124
//  const otherNumber =1123.8966; //  precision(3)   1.12e+3 very  carefull in the precision value
//  console.log(otherNumber.toPrecision(4)); // 1124

//  const hundreds =1000000;
// //  console.log(hundreds.toLocaleString()); //1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000

// ++++++++++++++++++++++++++ Min-Max ++++++++++++++++++
/*

try in google console
Number.MIN_VALUE
5e-324

Number.MAX_VALUE
1.7976931348623157e+308

*/

                   // *********************** maths **********************
console.log(Math);
console.log(Math.abs(-4)); /// 4
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.2)); // 5 give a top value
console.log(Math.floor(4.2));  // 4 lowest value 
console.log(Math.floor(4.9));  // 4
console.log(Math.min(4, 2,0,12.4 ,23, 100,-6));  // -6
console.log(Math.max(4, 2,0,12.4 ,23, 100,-6));  // 100

console.log(Math.random()); //  very important always 1<random value>0
console.log((Math.random()*10) + 1);  //7.883178594591883
console.log(Math.floor(Math.random()*10) + 1);  // 8 this line give the answer between 9 to 1

//  /////////////////////////////////////////////////////////////////////////////
const min = 10;
const max = 20; 
console.log(Math.floor(Math.random() * (max -min +1))+10) // very important 20< value >10 
// 2:52:00


/*  
E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()

*/


/*
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
*/