# 2-1-hw-password-generator

## Description
Password generator which asks users for inputs which determine the length of password and types of characters allowed to then generate as password. 

## Logic and Thought Process
1. HTML Button which starts the function to generate password
1. Reset all variables if user wants to generate another password again
1. Function starts, prompt which asks user to choose length of password between 8-128,
    * This needs to be validated such that if not between 8 - 128, returns error and runs again
1. User confirm to check what type of characters that the user wants in their password. These are all boolean variables. Each boolean variable corresponds to an array containing each of their characters. 
    1. lowercase 
    1. uppercase
    1. numberic
    1. special characters
        * If all are false, display alert which tells user that they need to select at least one option
1. For whichever character booleans are true, concatenate their corresponding array to a blank array which will be used for password search. 
1. Function which generates random character for password:
    1. Number of time password runs = User input for password length
    1. Generate random number of array length 
        ```js
            function randomInt(passwordArr.length) {
            return Math.floor(Math.random() * passwordArr.length);
            }
        ```
    1. Concatenate the corresponding letter to passwordArray
    1. Loop ends after times run is the same as the user input
1. Display password
