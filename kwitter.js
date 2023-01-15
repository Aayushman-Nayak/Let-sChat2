var firebaseConfig = {
    apiKey: "AIzaSyDxw2pURly7YxUylRHoMGAXxCYqYB21rvA",
    authDomain: "letschatwebapp-1029.firebaseapp.com",
    databaseURL: "https://letschatwebapp-1029-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-1029",
    storageBucket: "letschatwebapp-1029.appspot.com",
    messagingSenderId: "5952669582",
    appId: "1:5952669582:web:8f24e8702775ac8b6146df"
  };

  firebase.initializeApp(firebaseConfig);

function addUser(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom(){
    room_name = document.getElementById("room_name").value;
    localStorage.setItem("room_name", room_name);
    firebase.database().ref("/").child(room_name).update({
    purpose : "adding room"
    });
}