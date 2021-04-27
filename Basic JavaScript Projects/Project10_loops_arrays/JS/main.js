
function runWhile(){
    //Reveals the hidden element
    document.getElementById("looper").style.display = "inline"                      
    var i = 0;
    // Weird loop thing I made that goes forever except it has a break  
    while(1 == 1){
        i++;
        //Will change the value to whatever i is, but because there is no pause it goes to 31
        document.getElementById("looper").innerText = "This will count to: " + i;
        if(i > 30){
            break;
        } 
    }
}
//Basic for loop function that writes to 24 each on a new line
function runFor(){
    for(var i = 0; i < 25; i++){
        document.write(i + "<br>");
    }
}

function showArray(){
    // Set values
    let animals = ['Dog', 'Cat', 'Horse', 'Lizard', 'Dog'];  
    // Loop through the whole list
    for(var i = 0; i < animals.length; i++){
        // Print it out with a new line
        document.write(animals[i] + "<br>");
    }
}