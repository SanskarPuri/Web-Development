let screen=document.getElementById("screen");
let btns=document.querySelectorAll(".btn");
let display="";
for(let btn of btns){
    btn.addEventListener("click", function(){
        let btnText=btn.innerText;
    switch(btnText){
        case "=":
            display=eval(display);
            screen.innerText=display;
            break;
        case "C":
            display="";
            screen.innerText=0;
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            display+=btnText;
            screen.innerText=display;
            break;
        default:
            display+=btnText;
            screen.innerText=display;
    }
    });
}