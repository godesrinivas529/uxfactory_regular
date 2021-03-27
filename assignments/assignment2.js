/*
1) Write a function that takes time in hours format and return seconds.
getSeconds(1) ➞ 3600
getSeconds(10) ➞ 36000 
*/
function getSeconds(hours) {
    var onehour = 3600;
    return (hours * onehour);
}
console.log(getSeconds(10));

/*
2) Using arithmetic operators ( +, -, *, /, and %), write a function that takes three parameters, num1,
num2, and an operator. Perform the relevant operation on num1 and num2. Try with switch
statement.
operate(10, 20, "-") ➞ -10
// 10 - 20 = -10 
*/
function operator(num1,num2,oper)
{
    var res;
    switch (oper) {
        case  '+':
            res = num1 + num2;
            return res;
        case '-':
            res = num1 - num2;
            return res;
        case '*':
            res = num1 * num2;
            return res;
        case '/':
            res = num1 / num2;
            return res;
    }
}
console.log(operator(10,20,'-'));

/*
3) Create a function which returns true if given number is fully divided by 3. Return false otherwise.
divisibleByThree(9) ➞ true
divisibleByThree(13) ➞ false 
*/
function fullyDividedBy3(num) {
    if (num % 3 == 0 ) {
        return true;
    }
    return false;
}
console.log(fullyDividedBy3(16));

/*
4) Given an object containing counts of both brids and animals, return total count, using a function.
getTotalCount({ birds: 6, animals: 0 }) ➞ 6
getTotalCount({ birds: 2, animals: 7 }) ➞ 9
*/
var count = 0;
life = {
    birds : 6,
    animals :8,
}
if((life.birds ) && (life.animals )){
    count++;
}
console.log(count);





/*
5) Create a function that takes a number x and returns the xth odd number.
nthOdd(1) ➞ 1
nthOdd(3) ➞ 5
*/
function nthOdd(num) {
    for(var i=1; i<=num; i+=2){
        return 2*num-1;
    }
}
console.log(nthOdd(7));

/*
6) a simple program to determine whether you are eligible for voting. Note, people who are 18 and
older are only eligible.
checkEligibilityOfVoting(17) ➞ false
checkEligibilityOfVoting(19) ➞ true
 */
function eligibleForVote(age) {
    if(age >= 18){
        return 'Eligible for vote';
    }
    return 'Not eligible for vote';
}
console.log(eligibleForVote(17));

/*
7) Write a template string according to the following example:
const a = "Tim";
const b = "Tom";
const c = "Tony";
const d = "JS";
const statement = "your template string" ➞ "Tim knows JS which Tom doesn't that Tony knew
about"
*/
function templateString(person1,person2,person3,sub) {
    var statement = `"your template string "  ${person1} knows ${sub} which ${person2} doesn't that ${person3} knew about`
    return statement;
}
console.log(templateString('tim','tom','tony','JS'));

/*
8) Given a string, return true if its length is even or false if the length is odd.
oddOrEven("javascript") ➞ true
oddOrEven("css") ➞ false
*/
function stringLength(str) {
    console.log(str.length);
    if (str.length % 2 == 0) {
        return true;
    }
    return false;
}
console.log(stringLength('javascript'));

/*
9) Create a function that takes a word and returns the new word without including the first
character.
newWord("uxfactory") ➞ "xfactory"
*/
function newWord(str) {
    return str.substr(1,8);
}
console.log(newWord("uxfactory"));

/*
10) Write a function that takes a number and prints if its even. If its even, check if less than 10. If its
odd, return false
checkNumber(12) ➞ "Number is even"
"Its not less than 10".
checkNumber(7) ➞ false
checkNumber(6) ➞ "Number is even"
"Its less than 10".
 */
function checkNumber(num) {
    if (num %2  != 0) {
        return false;
    }
    if(num % 2 == 0){
        console.log("Number is even");
    
        if (num < 10){
            console.log('Its less than 10');
        }else{
            console.log('Its not less than 10');
        }
    }
}
checkNumber(6);

/*
11) Write a function taking two numbers, a,b. Return true if a is divided by b. Return false otherwise
checkNumber(2,3) ➞ false
checkNumber(21,3) ➞ true
*/
function checkNumberDivided(a,b) {
    if(a % b == 0){
        return true;
    }
    return false;
}
console.log(checkNumberDivided(21,2));

/*
12) Write a function taking two numbers, a,b. Return if (a+b) wholesquare is odd or even
checkNumber(2,3) ➞ odd
checkNumber(1,3) ➞ even
*/
function checkNumberWholesquare(a,b) {
    if(((a+b)^2) % 2 == 0){
        return 'even';
    }
    return 'odd';
}
console.log(checkNumberWholesquare(2,3));

/*
13) Write a palindrome fucntion
*/
function palindrome(num) {
    var sum = 0, rem, temp;
    temp = num;
    while (num > 0) {   
        rem = num % 10;
        sum = sum * 10 + rem;
        num = parseInt(num / 10) ;
    }
        if (temp == sum) {
            return 'palindrome';
        } 
        return 'Not palindrome';
}
console.log(palindrome(1221));

/*
14) Write a function that returns opposite of the number given
checkNumber(3) ➞ -3
checkNumber(-7) ➞ 7
*/
function checkNumberOpposite(num) {
    return num*(-1);
}
console.log(checkNumberOpposite(8));

/*
15) Program to find the biggest of three numbers
findBiggest (2,1,6) ➞ 6 
*/
function biggestOfThreeNum(a,b,c) {
   return a > b ? (a > c ? a : c) : (b > c ? b : c);
}
console.log(biggestOfThreeNum(10,15,20));