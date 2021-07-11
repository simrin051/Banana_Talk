var button_translate=document.querySelector("#btn-translate");

var input=null;
button_translate.addEventListener("click", function clickEventHandler() {
    output.innerText=input+"Heloow";
  });

  document.getElementById('user_input').addEventListener('input', function() {
    input = document.getElementById('user_input').value;
    document.getElementById('user_input').placeholder = input;
  
  });

  var output=document.querySelector("#output");
  output.innerText="Simrin";