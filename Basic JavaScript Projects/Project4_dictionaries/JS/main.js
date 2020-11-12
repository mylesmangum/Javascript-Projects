
function getRooms(){
    var apartment = {                                   // Initializing the KVP's
        rooms:2,
        temperature:72,
        address:"970 S, Univeristy Street",
        building:"B"
    };
    delete apartment.rooms;                       // Deleting the rooms
    document.getElementById("dictionary").innerHTML = apartment.rooms;  // Get the value for the key in rooms
};