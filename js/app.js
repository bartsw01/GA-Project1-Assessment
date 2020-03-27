// variable for output set to 0
// function to grab input
// function for addition button 
// function for subtraction button


let displayNumber = 0;
let inputNumber = 1;

document.getElementById("answer").textContent = `${displayNumber}`;



function addButton() {
    inputNumber = document.getElementById("enterNumber").value;
    displayNumber = parseInt(displayNumber) + parseInt(inputNumber);
    document.getElementById("answer").textContent = `${displayNumber}`;
    if (displayNumber >= 0) {
        document.getElementById("answer").style.color = "black";
        } else {
            document.getElementById("answer").style.color = "red";
        }
    console.log("It Adds!");
    console.log(displayNumber);
    
    }
    


function subtractButton (){
    inputNumber = document.getElementById("enterNumber").value;
    displayNumber = displayNumber - inputNumber;
    document.getElementById("answer").textContent = `${displayNumber}`;
    if (displayNumber >= 0) {
        document.getElementById("answer").style.color = "black";
        } else {
            document.getElementById("answer").style.color = "red";
        }
    
    console.log("It subtracts!");
    console.log(displayNumber);
    
}


//****************Add Event Listeners */
document.getElementById("add").addEventListener("click", addButton);

document.getElementById("subtract").addEventListener("click", subtractButton);