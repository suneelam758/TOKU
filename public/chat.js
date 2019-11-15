var socket = io.connect("http://localhost:8000");

var message = document.getElementById("message");

var handle = document.getElementById("handle");

var btn = document.getElementById("send");

var output = document.getElementById("output");

var feedback = document.getElementById("feedback");

btn.addEventListener("click",function(){

    socket.emit("chat" , {message:message.value , handle:handle.value});
});

message.addEventListener("keypress",function()
{
    feedback.innerHTML="";
    socket.emit("typing",handle.value);
});

socket.on("chat",function(data){

    output.innerHTML+='<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
});

socket.on("typing",function(data)

{
    feedback.innerHTML="<p><em>"+data+" is typing message </em></p>";
});




socket.on("chat",function(data){
    output.innerHTML+='<p><strong>' + data.handle + ':</strong>' +
    data.message + '</p>';
});
