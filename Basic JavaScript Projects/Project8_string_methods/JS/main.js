function editNum(){
    myNum = parseFloat(document.getElementById("input").value);         // Have to parse the input to a float for precision
    myNum = myNum.toPrecision(3);                                       // Change precision to 3
    document.getElementById("concat").innerHTML = concatNum(3, myNum);  // Call concatNum and set p text to what is returned
}

function concatNum(whatPrecision, number){                                                              
    return "Your number is ".concat(number, " and you have used a precision of: ", whatPrecision)                           // returns a concatenated string
}   

function sliceString(){
    myString = document.getElementById("input1").value.slice(0, 5) + " are the first 5 characters in that string.";         // Takes first 5 characters and makes new string w/ it
    document.getElementById("slice").innerHTML = myString                                                                   // Set p text to string value
}   

function makeString(){
    myString = document.getElementById("input2").value.toString() + " is your number as a string, I know pretty crazy.";    // Makes the inputted number a string
    document.getElementById("convert").innerHTML = myString;                                                                // Set p text to string value
}
