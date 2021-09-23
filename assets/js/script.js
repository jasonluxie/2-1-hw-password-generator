//Assigns generateBtn
let generateBtn = document.querySelector("#generate");

// Function which writes password to #password 
function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}
//Adds functionality to button when clicked
generateBtn.addEventListener("click", writePassword);
//Function to generate password
function generatePassword() {  
    //Arrays which hold all characters used
    let lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let uppercaseArr = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let numberArr = ['0','1','2','3','4','5','6','7','8','9'];
    let specialArr = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}',';',':','<','>',',','.','\\', '/','?','\'','\"'];
//Base array to store arrays based off user input
    let passwordArr = [];
//User input and validation which checks if user input is a number between 8 and 129, and if the number is an integer. If input does not meet any of these requirements, loops runs and user prompted again to input.
    let passwordLength = prompt("How many characters long would you like your password to be? Please choose an integer between 8 and 128 characters.");
    while (passwordLength < 8 || passwordLength > 128 || !Number.isInteger(Number(passwordLength))) {
        passwordLength = prompt("Password length must be an integer between 8 and 128 characters. Please try again.");
    };
//This function will give confirmation boxes to the user, and if any of them are true, it will concatinate it's corresponding array to the array "passwordARR" to store data.
    function valueCheck(){
        let lowercaseCheck = confirm("Do you want lowercase letters in your password?");
        if (lowercaseCheck) {
            passwordArr = passwordArr.concat(lowercaseArr);
        }

        let uppercaseCheck = confirm("Do you want uppercase letters in your password?");
        if (uppercaseCheck) {
            passwordArr = passwordArr.concat(uppercaseArr);
        }

        let numberCheck = confirm("Do you want numbers in your password?");
        if (numberCheck) {
            passwordArr = passwordArr.concat(numberArr);
        }

        let specialCheck = confirm("Do you want special characters in your password?");
        if (specialCheck) {
            passwordArr = passwordArr.concat(specialArr);
        }
    };
//Runs function valueCheck, and if there is no data in the array, alerts user that they must select at least one character type and runs the function again.    
    valueCheck();
    while (passwordArr.length == 0) {
        alert("You must select at least one type of character to be in your password");
        valueCheck();
    };
//Function which generated random number which is the length of the array "passwordArr". This number will be used as the index of passwordArr when selecting random characters.
    function randomInt() {
        return Math.floor(Math.random() * passwordArr.length);
        };
//Sets password to return as an empty stream so first iteration doesn't add anything, then, loop which which uses above randomInt() function to select a random item from passwordArr, which is added as a string to passwordActual until the length of passWord actual is the same length the length that the user inputted.
    let passwordActual = "";
    do {
        passwordActual = passwordActual + passwordArr[randomInt(passwordArr.length)];
    } while (passwordActual.length < passwordLength);
    return passwordActual;
}