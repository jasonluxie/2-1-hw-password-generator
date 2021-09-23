# 2-1-hw-password-generator

## Description
Password generator which asks users for inputs which determine the length of password and types of characters allowed to then generate as password. 
## Deployed Application
https://jasonluxie.github.io/2-1-hw-password-generator/

## Application Demonstration
Application asks user for passworth length input

<kbd>![Password Length](https://github.com/jasonluxie/2-1-hw-password-generator/blob/main/assets/images/1-password-length.png)</kbd>

If a non-valid length is given (length < 8, or length > 128, or length is not integer), prompt is shown again. 

<kbd>![Length Validation](https://github.com/jasonluxie/2-1-hw-password-generator/blob/main/assets/images/2-length-validation.png)</kbd>

4 different confirmations which ask the user what kind of characters they want in the password.

<kbd>![Character Confirmation](https://github.com/jasonluxie/2-1-hw-password-generator/blob/main/assets/images/3-character-confirmation.png)</kbd>

If all 4 character confirmations fail, then user is told they must select at least one. Character selection loops until at least one is selected.

<kbd>![Character Validation](https://github.com/jasonluxie/2-1-hw-password-generator/blob/main/assets/images/4-character-validation.png)</kbd>

Password is generated based on user input length and user character choice!

<kbd>![Password Generated!](https://github.com/jasonluxie/2-1-hw-password-generator/blob/main/assets/images/5-password-generated.png)</kbd>

## Logic and Thought Process
1. HTML Button which starts the function to generate password
1. Reset all variables if user wants to generate another password again
1. Function starts, prompt which asks user to choose length of password between 8-128,
    * This needs to be validated such that if not between 8 - 128, returns error and runs again
1. User confirm to check what type of characters that the user wants in their password. These are all boolean variables. Each boolean variable corresponds to an array containing each of their characters. 
    1. lowercase 
    1. uppercase
    1. numeric
    1. special characters
        * If all are false, display alert which tells user that they need to select at least one option
1. For whichever character booleans are true, concatenate their corresponding array to a blank array which will be used for password search. 
1. Function which generates random character for password:
    1. Number of time password runs = User input for password length
    1. Generate random number of array length 
    1. Add the generated character to the displayed password.
    1. Loop ends after times run is the same as the user input
1. Display password