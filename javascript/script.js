                                 //variables and operators
/*var x = 10;
var y = 20;
var sum = x + y;
console.log(sum);

var sub = x - y;
console.log(sub);

var mul = x * y;
console.log(mul);

var div = x / y;
console.log(div);

var a = 'hello';
var b = 'welcome to js'
console.log(a,b);
console.log(a+=b);

var bool = 1;
console.log(typeof bool);*/


                                            //functions
/*function addition(a,b) {
        var sum = a + b;
        console.log(sum);
}
var val = addition(10,5);


function greeting(name,lastname) {
    console.log(`Hello ${name} ${lastname}`); 
}
greeting("srinivas","gode");


function myFamily(name,middlename,lastname) {
    console.log(`${name} ${middlename} ${lastname}`);
}
myFamily("Atcha","Rayudu","Gode");
myFamily("Ganga","Janaki","Gode");
myFamily("Srinivas","","Gode");
myFamily("Aruna","Devi","Gode");*/



                                        //Objects
/*var vehicle = {
    name  : "Kia Sonet",
    yom   : 2020,
    color : "red",
    NoOfWheels : 4, 
    AirBag : true,
    AutoPillotMode : "No",
};
console.log(vehicle);
console.log(vehicle.name);// . notation
console.log(vehicle["name"]);// [] notation


                                            //Nested Objects
var bank = {
    name : 'BankOfMaharastra',
    location : 'Solapur',
    NetBanking : 'Allowed',

     staffDetails : {
        name : 'sandeep',
        designation : 'DeputyManager',
        YoExperience : 5,
        MaritialStatus : 'Married'
    },
};
console.log(`Hello ${bank.staffDetails['name']} Welcome to  ${bank.name} ${bank.location}`);*/


                                        //Arrays

var cars = [ 'kia', 'is', 'made', 'in', 'India']
//cars.splice(2,1,'hello');
console.log(cars.length-1);

var arr = [10,20,30,40,50];
var sum = 0;
for (var i = 0; i < arr.length; i++) {
     sum= sum + arr[i];        
}
console.log(sum);  
console.log(arr);

//console.log(arr.reverse());
var newArr = [];
for (var i = arr.length-1; i >= 0; i--) {
    newArr.push(arr[i]);
     }
     console.log(newArr);
     
      
     


 //Events


 function search() {
     var val=document.getElementById('srch').value;
     console.log(`You Searched For ${val}`);    
 }   

/*
 var age = 18;
 if (age >= 18) {
     console.log("Elegible for vote");
     
 } else {
     console.log("Not elegible for vote");
     
 }*/


 /*var dog = {
     legs : 4
 };

 var snake = {
     legs : 0
 };

 if (dog.legs > 0) {
     console.log("Dog can walk");
 }
 else {
     console.log("Dog can not walk");
 }

 if (snake.legs == 0) {
     console.log("Snake cant walk");  
 }*/ 

 var add = 0;
 var n = 0;
 while(n<10)
 {
     n++; 
     add = add + n;
     
 }
 console.log(add);

 var arr1 = [10,20,30,40,50];
var some = 0;
var i=0;
do{
    some = some + arr1[i];
    i++;
}while(i < arr1.length)
console.log(some);

/*var res;
res = Number('3' + '2')
console.log( typeof res);*/

var mul = 5;
for (var i = 1 ; i<=10 ; i++)
{
    if (i%2==0) {
        //res = mul * i;
        console.log(`${mul} * ${i} = ${mul*i}`);
    } 
}     

var today = new Date();
console.log(today); 
var date = today.getDate();
var month = today.getMonth()+1;
var year = today.getFullYear();
console.log(`${date}/${month}/${year}`);

function getTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    setInterval("getTime()",1000)
    document.getElementById('time').innerHTML= hr + ":"+ min + ":" +sec;  
}
//getTime();

//errors

try {
    callCulprit();
} catch (error) {
    console.error(error);
}
finally{
    console.log("its finally block");
}
function callCulprit() {
    console.log('hello mani');
    
}

//scoping 
var a = 100;//global scope
function abc() {
     a = 150;//local scope
    console.log(a);//150
    var a;
}
console.log(a);//100
abc();
console.log(a);//100

//largest array 
var arr = [20,60,4,100,82,68,99];
var large = 0;
for(var i = 0; i < arr.length; i++)
{
    if(arr[i] > large)
    {
        large = arr[i]
    }
}

console.log(`Largest number in an array: ${large}`);
//

var arr = [20,60,182,68,99];
console.log("Largest number in an array:",Math.max(...arr));
  //

var nums = [1,2,3,4,5];
var someNum = [];
for (var i = 0;i<nums.length;i++)
{
    someNum.push(nums[i] * 10);  
    
}
console.log(someNum);
//prime
/*var n =9, count = 0;
for(var i = 1; i < n; i++)
{
    if(n%i==0)
    {
        count++;
    }
}

    if (count==1) {

        console.log("prime");
    }else
    {
        console.log("not prime");
    }*/
//factorial
    /*var n=5,f=1;
    for(var i=n;i>=1;i--)
    {
        f=i*f;
        
    }
    console.log(f);
*/

//palindrome/reverse
//fibonacci
/*var n=5,n1=0,n2=1,n3;
console.log(n1);
for(var i=0;i<=n;i++){
    n3=n1+n2;
    n1=n2;
    n2=n3;
    console.log(n1);
}*/

//common elements
/*var arr1 = [1,2,3,4,5,6];
var arr2 = [5,6,7,8,9,10];
for(var i = 0; i<arr1.length;i++)
{
    for(var j=0;j<arr2.length;j++)
    {
        if(arr1[i] == arr2[j]){
            document.write(arr1[i]);
            
        }
    }
}*/

/*var n = 4;
for (var i = n; i>=1; i--){
    var str = "";
    for (var j = 1; j<=i; j++){
        str += j;
    }
    console.log(str);
}*/

//classes
/*class Car{
    constructor(mdName,mdYear){
        this.mdName = mdName;
        this.mdYear = mdYear;
    }
   
    static cars(company){
        
        return `it is a simile static method ${company}`;

    }

    vehicle (){
        return `car name is ${this.mdName} manfactured in year ${this.mdYear}`
    }
}
console.log(Car.cars('ford'));
var veh = new Car ('ford',2014 );
console.log(veh.vehicle());*/

//class with nonstatic method
class Bike{
    constructor(Bname, Byom){
        this.Bname = Bname;
        this.Byom = Byom;
    }

    vehicle(){
        return `my vehicle  is ${this.Bname} and manfactured in ${this.Byom}`
    }
}

var obj = new Bike('yamaha',2019);
var obj1 = new Bike('ktm',2014);
var obj2 = new Bike('kia sonet',2020);
var obj3 = new Bike('tesla',2021);

console.log(obj.vehicle());
console.log(obj1.vehicle());
console.log(obj2.vehicle());
console.log(obj3.vehicle());

//class with nonstatic method
class car {
    constructor(Cname, Cyom, Ccolor) {
        this.Cname = Cname;
        this.Cyom = Cyom;
        this.Ccolor = Ccolor;
    }

    vehicle(){
        return `Missing my ${this.Cname} color ${this.Cyom} car manfactured in ${this.Ccolor}`;
    }
}
    var obj = new car('Red', 'KiaSonet', 2020)
    console.log(obj.vehicle());

//class with static method

class Book{

    static whiteNotes(color){
        return `i had a ${color} color book`;
    }
}
console.log(Book.whiteNotes('black'));

class Device{

    static laptop(brand,  color, price){
        return `i bought ${color} color ${brand} laptop @ ${price}`;
    }
    static mobile(company,cost,discount){
        return `bought ${company} @ ${cost} with ${discount}`
    }
}
console.log(Device.laptop('dell', 'black',35499 ));
console.log(Device.mobile('I-phone',24999,'10%'));

//class with static & non-static method

class Animals{
    constructor(hname,hcolor,hprice){
        this.hname = hname;
        this.hcolor = hcolor;
        this.hprice = hprice;
    }
    
    static dog(breed,color,height){
        return `bought ${color} color ${breed} dog with height ${height}`;
    }

    horse(){
        return `bought ${this.hcolor} color ${this.hname} horse @ ${this.hprice}`;
    }
}
console.log(Animals.dog('German Shepherd','brown','60cm'));
var obje = new Animals('champ','black',129000);
console.log(obje.horse());    

var arr = [10,20,30,40];
var arr1 = [50,60,80];
var arra = [...arr, ...arr1];
console.log( arra);



function checkString(a,b){
    var x = a.indexOf(b);
    console.log(x);
    if(x != -1){
        return true;
    }else {
        return false;
    }
}
var obj = checkString('my name is rahul','my');
console.log(obj);

function checkNumber(a,b) {
    //var total = a + b;
    //console.log(total);
    if(b % 2 == 0)
    {
        console.log('divisible by 2');
    }
    else{
        console.log('not divisible by 2');
    }
}
checkNumber(4,5);


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
    for(var j=1; j<=i; j++){
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

//
var fruits={ 
    type:"A",
    name:"bananna,apple,pineapple",
  };
  var fruits2={
    type:"B",
    name:"custeredapple,guava,lemon",
  };
  var fruits3={
    type:"C",
    name:"apricot,blackberry,coconut",
  }; 
  function typeOfFruit(type){
      return fruits2['name'];
  }
 console.log(typeOfFruit(fruits2.type));


 //reverse number using function
 function reverseNum(n){
    if(n>=10)
        return;
        for (var i = 10; i>=n; i-=2)
            //if(i%2==0){
         console.log(i);
         console.log('somestring');
           // }        
 }
reverseNum(5);

function avgNum(arr){
    var sum = 0;
            for(var i = 0; i<arr.length;i++){
                
                sum = sum + arr[i];
            }
                var avg = (sum/arr.length);
                return avg;

    
}
console.log(avgNum([1,2,3,4,5,6]));

//max num with 3 num
function maxNum(a,b,c){
    max = a > b ? ( a > c ? a : c) : (b > c ? b : c) ;
    return max;
}
console.log(maxNum(10,8,21));



var count =0;
function sameArray(arr1,arr2)
{
    for(var i=0;i<arr1.length;i++)
    {
        if(arr1[i] != arr2[i])
        {
            return false;
                
        }
    }
    return true;
}
console.log(sameArray([10,20,30],[10,20,30]));

//palindrome

function palindrome(num) {
 var sum =0, rem = 0;
 var temp = num;
 while(num>0){
     rem = num % 10;
     sum = (sum * 10) + rem;
     num =parseInt(num / 10);

 }
 if(temp == sum ){
     console.log('palindrome');
 }else{
     console.log('not palindrome');
 }
    
}
palindrome(121);

//

/*function stringPalindrome(str) {
    for(var i = 0; i<str.length; i++){
        if(str[i] == str.length-1){
        console.log('palindrome');
        return;
        }
    
    else{
        console.log('not palindrome');
    }
}
}
stringPalindrome('madam');*/

function evenNumArray(arr) {
    var emptyArr = [];
    for(var i=0;i<arr.length;i++){
       // console.log(arr[i]);
       if(arr[i]%2==0){
         emptyArr.push(arr[i]);
       }

    }
    return emptyArr;
    
}
console.log(evenNumArray([3,4,10,17,20,30,41]));

function perfectSquareNum(num){
       return Math.sqrt(num);
}
console.log(perfectSquareNum(10));

 //duplicate
 function duplicate(arr) {
     for(var i = 0; i<arr.length; i++){
         for (var j = i+1; j<arr.length; j++){
             if(arr[i] == arr[j]){
                 console.log(arr[j]);
                  
             }
         }
     }
 }
 duplicate([2,9,4,5,1,9,4,4,9]);

 /* 
 function duplicate(arr)//[2,3,2,6,6,6]
{
    duplicateArray=[];
    for(i=0;i<arr.length;i++)
    {
        for(j=i+1;j<arr.length;j++)
        {
            var storedValue=findElement(arr[j],duplicateArray);
            if(storedValue==false)
            {
                if(arr[i]==arr[j])
                {
                    duplicateArray.push(arr[j]);
                }
            }
        }
    }
    console.log(duplicateArray);
}
function findElement(value,duplicateArray)
{
    for(var k=0; k<duplicateArray.length; k++)
    {
        if(value==duplicateArray[k])
        {
            return true;
        }
    }
    return false;
}
duplicate([2,3,2,6,6,6]);
 */

var vehicle1 = {
    type: "car",
    model: "ferrari",
    company: "Tata",
    mileage: 70
}

var vehicle2 = {
    type: "bike",
    model: "Royal",
    company: "honda",
    mileage: 86
}
var vehicle3 = {
    type: "Truck",
    model: "maruti",
    company: "hero",
    mileage: 77
}

var vehicle4 = {
    type: "auto",
    model: "hizak",
    company: "Toyota",
    mileage: 68
}

var vehicles = [vehicle1, vehicle2, vehicle3, vehicle4];
function getVehicleByMileage(mileage){
    var requiredVehicle = [];
    for(var i=0;i<vehicles.length;i++)
    {
        if( vehicles[i].mileage >= mileage)
        {
            requiredVehicle.push(vehicles[i]);
             
        }
    }
    return requiredVehicle;
}
console.log(getVehicleByMileage(70));
