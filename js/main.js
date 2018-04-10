

var username = document.getElementById("username");
var comment = document.getElementById("comment");

function appendcomment (){
    
var myDiv = document.createElement("div");
myDiv.innerHTML = "<h1>" + username.value + "</h1> <p>" + comment.value + "</p>";
document.body.appendChild (myDiv);
}