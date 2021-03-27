//(05/03/2021)
/*
1
12
123
*/
var num = 3;
for(var i=1; i<=num; i++){
   var str = '';
   for(var j=1; j<=i; j++){
    str = str + j;
   }
    console.log(str);
}

/*
1234
123
12
1
*/
var numb = 4;
for(var i=numb; i>=1; i--){
    var str = '';
    for(var j=i; j>=1; j--){
        str = str + j;
    }
    console.log(str);
}

//check given string contains 9 or not
function containsString(str1,str2){
     if(str1.includes(str2)){ 
        return true;
    }else{
        return false;
    }
}
var str = containsString('string9','9')
console.log(str);

//swap using temp variable
var a = 10, b = 20;
console.log('Before swap', a,b);
var temp = a;
 a = b;
 b = temp;
 console.log('After swap', a,b);

 //swap using without third variable
 var c = 30, d = 40;
 console.log('Before swap', c,d);
 c = c + d;
 d = c - d;
 c = c - d;
 console.log('After swap',c,d);

 //print even numbers upto given number
 var n = 10;
for(var i = 1; i <= n; i++){
    if(i%2 == 0){
        console.log(i);
    }
}

//no of occurance in an element
var arr = [1,2,2,3,4,2];
var n = 2, count = 0;
for(var i = 0; i<=arr.length; i++){
    if(arr[i] == n){
        count++;
    }
}
console.log(`${n} is repeated ${count} times`);

//factorial
function factorial(num) {
    var fact = 1;
    for(var i = num; i >=1; i--){
        fact = fact * i;
    }
    console.log(fact);
    
}
factorial(5);
