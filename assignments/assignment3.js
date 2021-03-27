/*
1) Write a function to calculate Sum and Average an array element. 
sumAndAverage([10, 20,30, 40]); 
Output: 
Sum: 100 
Average: 25 
*/
function sumAndAverage(arr) {
    var sum = 0,avg;
    for(var i = 0 ; i< arr.length; i++){
        sum = sum + arr[i];
        avg = sum/4;
    } 
    return `Sum is ${sum} & Average is ${avg}`;
}
console.log(sumAndAverage([10,20,30,40]));

/*
2) Create a function to multiply all of the values in an array by the amount of values in the 
given array. 
multiplyByLength ([2, 3, 1, 0]) 
Output: 
[8, 12, 4, 0]
*/
function multiplyByLength(arr) {
    var newArr = []
    for(var i = 0; i<arr.length; i++){
        newArr.push(arr[i] * arr.length);
    }
    return newArr;
}
console.log(multiplyByLength([2,3,1,0]));

/*
3) Write a function to create multiplication table by using while loop 
 multiplicationTable(5) 
Output: 
5 X 1 = 5 
5 X 2 = 10 . . . 5 X 10 = 50 
*/function multiplicationTable(num) {
    var i=1;
    while(i<=10){
       console.log( `${num} * ${i} = ${num*i}`);
        i++;
    }   
}
multiplicationTable(5);

/*
4) Write a function to read a string, push individual letters into an array in revers order and join 
them with ‘#’ keyword 
reverseStringAndJoin(‘HTML’); 
Output: "L#M#T#H"
*/
function reverseStringAndJoin(str) {
    var strrev = '';
    for (var i=str.length-1; i>=1; i--){
        strrev= strrev + str[i] + '#';
    }
    strrev= strrev + str[i];
    return strrev;
}
console.log(reverseStringAndJoin("HTML"));

/*
5) Create a function to read multidimensional array and push the sum of its values in different 
array */

//output: [6, 8]; 
 
function sumArray(mainArray) {
    for(var i = 0; i < mainArray.length; i++){
      var  sum = 0 ;
        for(var j = 0; j < mainArray[i].length; j++){
            sum = sum + mainArray[i][j];
        }
        console.log(sum);
    }
        
}
sumArray([[1,5,2],[1, 2, 3],[1, 3, 4]]);

 

/*
6) Read an array and push the even and odd elements in two different arrays. 
evenAndOddArray([12, 5, 7, 10, 1]); 
output: 
evenArray: [ 12, 10] 
oddArray: [5, 7, 1] 
*/
function evenAndOddArray(arr) {
    var evenArray = [];
    var oddArray = [];
    for(var i=0; i<arr.length; i++){
        if(arr[i] %2 == 0){
            evenArray.push(arr[i]);
        }else if(arr[i] %2 != 0){
            oddArray.push(arr[i]);
        }
    }
    console.log(evenArray, oddArray);
}
evenAndOddArray([12, 5, 7, 10, 1]);

/*
7) Create a function that takes an array of numbers. Return the largest number in the array. 
findLargestNum ([10, 98,7]); 
output: 98 
*/
function findLargestNum(arr) {
    var large = 0;
    for(var i = 0; i<arr.length;i++){
        if(arr[i] > large)
        {
            large = arr[i];
        }   
    }
    return large;
}
console.log(findLargestNum([10, 98,7]));

/*
8) Create a function that takes an array of numbers. Return the smallest number in the array. 
findSmallestNum ([50, 67, 45]); 
output: 45 
*/function findSmallestNum(arr) {
    var small = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i] < small){
            small = arr[i];
        }
    }
    return small;
}
console.log(findSmallestNum([50,67,45]));

/*
9) check elements are divisible by 2 or not and print them as shown below 
checkElements([6, 99, 10]) 
output: 
6 divided by 2 
99 can’t divided by 2 
10 divided by 2 
*/
function checkElements(arr) {
    for(i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0 ){
            console.log( `${arr[i]} divided by 2`);
        }else if(arr[i] % 2 != 0){
            console.log(`${arr[i]} can't divided by 2`);
        }
    }
}
checkElements([6,99,10]);

/*
10) Create a function which returns the total of all odd numbers up to and including n. n will be 
given as an odd number. 
addOddToN(5) 
output: 9 // 1 + 3 + 5 = 9
*/
function getTotalOfOddNumber(num) {
    var sum = 0;
    for(var i=1; i<=num; i+=2){
        sum = sum + i;
    }
    return sum;
}
console.log(getTotalOfOddNumber(5));