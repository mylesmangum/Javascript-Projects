

function checkAge(){
    
    class Person {                                                                                                                          // A class I made, I know functions are what
        constructor(age, name, phonenumber) {                                                                                               // we were doing but this is what i found online
            this.age = age;                                                                                                                 // I think it's easier to make functions to work
            this.name = name;                                                                                                               // with the class but I dont know how helpful it is
            this.phonenumber = phonenumber;                                                                                                 // in JavaScript w/o inheritance
        }
    }   

    var newUser = new Person(document.getElementById("age").value,                                                                          // Kinda long line, broke into two lines
    document.getElementById("name").value, document.getElementById("phone-number").value);                                                  // Create new Person based on the textbox innerHTML
    document.getElementById("output").innerHTML = (newUser.age > 17) ? "You are old enough to vote":"You are not old enough to vote";       // Checks age value in newUser and returns correct option
    
    document.getElementById("age-output").innerHTML = "Your age inputed is: " + newUser.age;                                                
    document.getElementById("name-output").innerHTML = "Your name inputed is: " + newUser.name;                                             // These three lines do the same thing, putting 
    document.getElementById("number-output").innerHTML = "Your number is: " + newUser.phonenumber;                                          // the input somewhere to see on the page for the user
};