
const firebaseConfig = {
    apiKey: "AIzaSyA9zZ4IxYnylZOqWa7A-ol51Kqxs8lKcb0",
    authDomain: "project-kwitter-d393b.firebaseapp.com",
    projectId: "project-kwitter-d393b",
    storageBucket: "project-kwitter-d393b.appspot.com",
    messagingSenderId: "52611327643",
    appId: "1:52611327643:web:53899d6bd87b47d9c5883e",
    measurementId: "G-0Y4S43TM4J"
  };
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Names- " + Room_names);
    row = "<div class= 'room_name' id =" +Room_names+"onclick = redirectToRoomName(this.id)'># "+Room_names+"</div><hr>" 
    document.getElementById("output").innerHTML += row;
    });});}
getData();


function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name" 

  });

  localStorage.setItem(room_name,"room_name");
  window.location ="kwitter_page.html"
}

function redirectToRoomName(){
console.log(name);
localStorage.setItem("room_name",name);
window.location ="kwitter_page.html";
