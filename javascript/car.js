let u=25;
console. log(u);
let car={
    carname:"honda",
    year:2019,
    carprice:80000
}
for(let v in car)
{
 console.log(car[v]);
}
let a=12
let b=5
let c=a+b
document.write(c)
document.write("<br>")
if(a>18)
{
    document.write("Able to vote")
}
else{
    document.write("Not able to vote")
}
document.write("<br>")
let d="dsafgtryuijkeg"
let  bd=d.length
document.write(bd)
let str="sabari"
let x=str.length
document.write("<br>",x)
var newstr=str.slice(0,4)
document.write("<br>",newstr)
document.write("<br>",str.substring(0,4))
document.write("<br>",str.substr(0,4))
var z=new Array();
z[0]=21
console.log(z[0]);
var animals=["tiger","lion","elephant","Giraffe"]
console.log(animals);
console.log(animals[0])
console.log(animals.sort())
document.write("<br>")
function nor(){
    var animals=["tiger","lion","elephant","Giraffe"]
    document.write(animals)
    
}
nor();
document.write("<br>")
let def=()=>{
    var p=["1","2","3","4"];
    document.write(p)
}
def();