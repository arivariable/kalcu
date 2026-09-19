//calculator variables
let num1,num2,operator,result,sign;
num1 ="";
num2 ="";
result ="";
operator="default";
let operators=["+","-","\u00F7","X","%","C","+/-","="]


//main calculators container
let container = document.querySelector("#calculator");

// buttns
let buttons = document.createElement("button");
buttons.classList.add("allbtns");
// buttons.style.flex="1";
// buttons.style.width="30px";
// buttons.style.height="30px";
// buttons.style.borderRadius="20px";
// buttons.style.backgroundColor="rgba(255,255,255,0)";

//screen
let screen = document.createElement("div");
screen.classList.add("screen");
screen.innerText="";
let screen1 = screen.cloneNode(true);
let screen2= screen.cloneNode(true);


let clonedbtn = []


//button section 
let btnsection = document.createElement("div");
btnsection.classList.add("btnconts");


//main buttons container
let buttoncont = document.createElement("div");



function makecalculator(){
//buttons names
const btnnames =["C","+/-","%","\u00F7","7","8","9","X","4","5","6","-","1","2","3","+","0","0",".","="];
//array to store clone buttons


// clone sections
let clonedsection = [];
let counter = 0;
clonedsection[counter]=btnsection.cloneNode(false);

// loop to create buttons in memory
for(let i=0;i<20;i++){

    clonedbtn[i] = buttons.cloneNode(false);
    clonedbtn[i].innerText=btnnames[i];
    clonedbtn[i].id="btn"+btnnames[i];

    if(i%4==0 && i != 0){
    counter ++;
    console.log(counter)
    clonedsection[counter]=btnsection.cloneNode(false);
    }

    clonedsection[counter].appendChild(clonedbtn[i]);
    buttoncont.appendChild(clonedsection[counter]);

}




//appending created elements to main calculator container
container.appendChild(screen1);
container.appendChild(screen2);
container.appendChild(buttoncont);
//managing double 0
clonedbtn[17].remove();
console.log(clonedbtn[17]);

}

makecalculator();


console.log(clonedbtn[0]);


let handleinput =(e)=>{
if(!e.target.matches("button")){
    return;
}

if(operators.includes(e.target.id.slice(3))){
    if (result!=0){
        num1=result;
        result=0;
        num2="";
    }

        console.log("operator");
        switch(e.target.id.slice(3)){
            case "+":
            operator="addition";
            sign="+";
            break;
            case "-":
            operator="subtract";
            sign="-";
            break;

            case "X":
            operator="multiply";
            sign="X";
            break;

            case "\u00F7":
            operator="division";
            sign="\u00F7";
            break;

            case "%":
            operator="percent";
            sign="%";
            break;

            case "C":
            clear();
            break;

            case "+/-":
            if(operator=="default"){
                num1 = num1*-1;
            }
            else{
                num2 = num2*-1;
            }
            break;

            case "=":
            operate();
            break;


        }
    }

else if(operator!="default"){
    num2+= e.target.id.slice(3);
    console.log(num2);

}
else{
    num1+= e.target.id.slice(3);
    console.log(num1);
}
updatescreen();
}

        
function clear(){
    num1 ="";
    num2 ="";
    result="";
    operator="default"
}
function operate(){
    result = 0;
    A = Number(num1);
    B = Number(num2);
    
    switch(operator){
    case "addition":
    result = A + B;
    break;

    case "subtract":
    result = A - B;
    break;

    case "multiply":
    result = A * B;
    break;

    case "division":
    result = A / B;
    break;

    case "percent":
    result = (A/100) * B;
    break;
    

}
    operator="default";
    updatescreen();
    num2="";
}
function updatescreen(){
    A= Number(num1);
    B= Number(num2);
    if(operator=="default"){
        screen1.innerText=A;
    }
    else if(operator!="default"){
        screen1.innerText=A+" "+ sign +" "+ num2;
    }
    screen2.innerText=result;
}




container.addEventListener("click",handleinput);