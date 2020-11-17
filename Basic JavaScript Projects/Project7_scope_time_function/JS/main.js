today = new Date();                                                                     // Initialize global date variable
function checkTime(){
    var currHour = today.getHours();                                                    // Initialize local hour variable
    
                                                                                        //
    if(currHour < 12){                                                                  //
        document.getElementById("time").innerHTML = "It is the morning";                //   Conditional statement that checks for
    }                                                                                   //   hour, and based on that changes response 
    else if(currHour < 18){                                                             //   put on the document
        document.getElementById("time").innerHTML = "It is the afternoon";              //
    }                                                                                   //
    else{
        document.getElementById("time").innerHTML = "Its night time, go to bed.";
    }


    console.log() = today.getHour();                                                    // Puts error in console
}