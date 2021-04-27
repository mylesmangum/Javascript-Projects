
function runWhile(){
    document.getElementById("looper").style.display = "inline"
    var i = 0;
    while(1 == 1){
        i++;
        document.getElementById("looper").innerText = "This will count to: " + i;
        if(i > 30){
            break;
        } 
    }
}

function runFor(){
    for(var i = 0; i < 25; i++){
        document.write(i);
    }
}

function showArray(){
    let animals = ['Dog', 'Cat', 'Horse', 'Lizard', 'Dog'];
    for(var i = 0; i < animals.length; i++){
        document.write(animals[i] + "<br>");
    }
}