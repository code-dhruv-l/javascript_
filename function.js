                    //without parameter 


function intro(){
    document.write("i am dhruv");
    document.write("<br>");
    document.write("hy" , "<br>","<br>");
}
intro();



                    // function with parameter
                    

                    
function sum(a,b){
    document.write(a + b + "<br>");
};                    
sum(3,6);
sum(3,7);
sum(3,5);


                    //with return value
                    

document.write("<br> Total subjects: 3 <br> Total marks- 300 <br> <br>");

function sumofmarks(pyhton,ios,android){
    var a =pyhton+ios+android;
    return a;
}

var b=sumofmarks(81,80,79);
document.write("Obtain Marks: ",b , "<br>");
                  
function percentage(per){
    var p=per/300*100;
    return p;
}
var c=percentage(b);
document.write("Percentage is: ",c,"%");
