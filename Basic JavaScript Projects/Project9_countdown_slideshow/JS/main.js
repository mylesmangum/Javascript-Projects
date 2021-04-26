function countdown(){
    var time = document.getElementById("seconds").value;                    // Set time variable to whatever
                                                                            // is inputted

    
    function oneTick(){
        document.getElementById("timer").innerHTML = time;
        if(time == -1){                                                     // Checks for end of timer
            alert("You're out of time now leave");                          // and alerts you if needed
        }
        else{                       
            time = time - 1;                                                // Ticks down every second
            setTimeout(oneTick, 1000);
        }
        
    }
    setTimeout(oneTick, 1000);

}

var slideIndex = 0;                                                 // Set starting index value, which will be the first image at 0
function nextSlide(){                                               //
    var slides = document.getElementsByClassName("slides");         // Make list of all slide elements in class
    slideIndex++;                                                   // Increment by 1 to start the next slide
    
    if(slideIndex != 0 && slideIndex < slides.length){              // The conditionals make sure that values will not go out of bounds
        slides[slideIndex-1].style.display = "none";                // in the list, if it doesn't then it will take the last slide remove
        slides[slideIndex].style.display = "inline";                // it and show the next
    }
    else if(slideIndex == 0){
        slides[0] = "none";                                         // If the list gets wrapped around it will check here and I hard coded
        slides[1] = "inline";                                       // the values rather than using variables
    }
    else if(slideIndex >= slides.length){
        slideIndex = 0;                                             // Sets index back to 0 if it reaches the end of the list
        slides[0].style.display = "inline";                         // Wraps back around to first image
        slides[slides.length - 1].style.display = "none"            // Hides last image in the list
    }
}


