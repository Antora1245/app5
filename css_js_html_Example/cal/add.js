function sum()
{
var a=document.getElementById("a").value;
var a=parseFloat(a);

var b=document.getElementById("b").value;
var b=parseFloat(b);

if(isNaN(a)||isNaN(b)) //Not a Number
{
alert('please enter a valid number');
}

else
{
var s=document.getElementById("s").value=a+b;
}
}