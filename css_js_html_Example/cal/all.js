function x()
{
var a=document.getElementById("a").value;
var a=parseFloat(a);

var b=document.getElementById("b").value;
var b=parseFloat(b);

alert('if you want to calculate all the values at once then press OK');

if(isNaN(a)||isNaN(b)) //NaN=Not a Number
{
alert('please enter a valid number');
}

else
{
var s=document.getElementById("s").value=a+b;


var p=document.getElementById("p").value=a*b;

var d=document.getElementById("d").value=a/b;

var r=document.getElementById("r").value=a%b;

var sub=document.getElementById("sub").value=a-b;
}
}