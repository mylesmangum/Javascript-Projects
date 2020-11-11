function doAddition(){                                                  // This just makes big stupid numbers
    var randomNum = Math.random() * 21;                                 // Start w/ just a number between 21 and 0
    var moddedNum = randomNum % 100;                                    // Find the mod of it making it less than 100
    var addedNum = moddedNum + randomNum;                               // Add the mod back to the original number
    var subbedNum = addedNum - 3;                                       // Subtract 3 because why not
    var dividedNum = subbedNum / Math.random();                         // Mulitply by dividing by a fraction
    var multipliedNum = dividedNum * (Math.random() * 54321);           // Then make it big by just multiplying it, maybe
    document.getElementById("Math").innerHTML += multipliedNum + ", ";  // Add it to the HTML and make it a big organized
};                                                                    