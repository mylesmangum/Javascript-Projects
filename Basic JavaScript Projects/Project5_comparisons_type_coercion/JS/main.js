function setHTML(){
    document.write(typeof(document.getElementById("textbox").value));    // Checks the value type, which is going to be string
};

function combineVariables(){
    var str = "100";                    // Initialize string value
    var num = 20;                       // Initialize number value
    window.alert(str + num);            // Concatenate the two, converting it to only a string
};

function sameVariable(){
    var str1 = "Hello";                     // Initialize all values
    var str2 = "Helo";
    var num1 = 4;
    var num2 = 4;
    window.alert(((str1==str2) && ((str1===str2)) || ((num1 > num2) && !(num1 < num2)))); // Checks if the strings are the same value and type,
}                                                                                         // and if num1 is greater than num2. If either are true it returns true
