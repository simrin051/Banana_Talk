var button=document.querySelector("#btn-translate");
console.log("Button "+button);
var input=null;
button.addEventListener("click", function clickEventHandler() {
    console.log("Clicked");
    console.log("User Input "+input);
  });

  document.getElementById('user_input').addEventListener('input', function() {
    input = document.getElementById('user_input').value;
    document.getElementById('user_input').placeholder = input;
  
  });