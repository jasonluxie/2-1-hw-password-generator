let generateBtn = document.querySelector("#generate");

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {  
    let lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let uppercaseArr = ['A', 'B', 'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let numberArr = ['0','1','2','3','4','5','6','7','8','9'];
    let specialArr = ['!','@','#','$','%','^','&','*','(',')','-','_','+','=','[',']','{','}',';',':','<','>',',','.','\\', '/','?','\'','\"'];
    let passwordArr = [];

    let passwordLength = prompt("How many characters long would you like your password to be? Please choose between 8 and 128 characters.");

    while (passwordLength < 8 || passwordLength > 128) {
        passwordLength = prompt("Password length must be between 8 and 128 characters. Please try again.");
    }

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
    
    valueCheck();
    
    while (passwordArr === []) {
        valueCheck();
        alert("Yout must select at least one  type of character to be in your password");
    };
    // console.log(passwordArr);
    function randomInt() {
        return Math.floor(Math.random() * passwordArr.length);
        };
    let passwordActual = "";
    do {
        passwordActual = passwordActual + passwordArr[randomInt(passwordArr.length)]
    } while (passwordActual.length < passwordLength)
    return passwordActual
}