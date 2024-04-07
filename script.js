const display= document.querySelector(".display");
const buttons= document.querySelectorAll("button");
const specialChars = ["%" ,"*" , "/" , "-" , "+" ,"="];
let output =" ";


const calculate = (btnValue) => 
{
if(btnValue === "=" && output !== " ")
{
   //if output has '%  ' ,relase with /100 befor evaluting;
   output =eval(output.replace("%" ,"/100"));
}else if(btnValue === "AC")
{
    output=" ";
}
else if(btnValue === "DEL")
{
    output =output.toString().slice(0,-1);
}
else{
    if(output === "" && specialChars.includes(btnValue)) return;
    output += btnValue;
}
display.value = output;

}

//Add event listener to buttons ,call calculator() on click.
buttons.forEach((button) => {
    //Button click listener calls calculator( )with dataset value as argument
    button.addEventListener("click" ,e => calculate(e.target.dataset.value) );

});
//console.log(display,buttons);