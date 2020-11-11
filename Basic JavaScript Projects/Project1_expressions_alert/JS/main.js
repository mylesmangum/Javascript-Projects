function changeColor(){                                                                         //
    var newColors = document.getElementById("change-color").innerHTML;                          // Grabs the innerHTML to be used later   
    var newColors = newColors.fontcolor("green");                                               // Changes only the color for the HTML
    document.getElementById("change-color").innerHTML= newColors;                               // Sets the new color with new values
};                                                                                              //

function clickAlert(){                                                                          //
    var A = "This is the text that appears when you click the", B = " button too!";             // The two strings we will concatenate
    window.alert("This is a warning message for pressing the button")                           // Puts alert on screen when called
    document.write(A + B)                                                                       // Concatenates the two strings we wrote
};                                                                                              //