function countdown(){
    var time = document.getElementById("seconds").value;
    

    
    function oneTick(){
        document.getElementById("timer").innerHTML = time;
        if(time == -1){
            alert("You're out of time now leave");
        }
        else{
            time = time - 1;
            setTimeout(oneTick, 1000);
        }
        
    }
    setTimeout(oneTick, 1000);

}