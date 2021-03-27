/*function addToCart()
{
    alert("Added to cart SUCCESSULLY!!")   
}*/
var addToCart = () => (alert("Added to cart SUCCESSULLY!!"));//arrow function

//function description
function shopNow()
{
    confirm("Are you going to shop now?")
}
function newProducts()
{
    alert("NEW PRODUCT")
}
function bestSellers()
{
    alert("BEST SELLER")
}
function getDate()
{
    var today = new Date();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    document.write("<h5>"+ date +"/" + month+1 +"/"+ year +"</h5 >"); 
}
getDate();

function getTime()
{
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    setInterval("getTime()",1000);
    document.getElementById("time").innerHTML=(`<h5>${hr}:${min}:${sec}</h5>`);
       
    
}
getTime();