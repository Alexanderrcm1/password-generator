const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let password1 = ""
let password2 = ""
let passwordArray = []
let passwordArray2 = []

let generateBtn = document.querySelector("#generate-btn");
let firstPassword = document.querySelector("#first-password");
let secondPassword = document.querySelector("#second-password");

generateBtn.addEventListener("click", function() {
    render()
})



function generatePassword() {
        for (let i = 0; i < 15; i++) {
            //passwordArray.push(Math.floor(Math.random() * characters.length))
            //passwordArray2.push(Math.floor(Math.random() * characters.length))
            let random1 = Math.floor(Math.random() * characters.length)
            let random2 = Math.floor(Math.random() * characters.length)
            passwordArray.push(characters[random1])
            passwordArray2.push(characters[random2])
        }
        password1 = passwordArray.join("")
        password2 = passwordArray2.join("")
}

function render() {
    generatePassword();
    passwordArray = []
    passwordArray2 = []
    firstPassword.textContent = password1;
    secondPassword.textContent = password2;
    
}

function processForm() {
    let passwordLength = document.querySelector("#password-length").value;
    return passwordLength
    
}
