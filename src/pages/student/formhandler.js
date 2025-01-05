const form = document.getElementById('upfile')

let possible = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";  
var captcha = "";
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function myFunction() {
  document.getElementById("bar").value = "";
  captcha = "";
  let len = Math.floor(Math.random() * 3) + 5;
                    
  for (let i = 0; i < len; i++){
    let n = Math.floor(Math.random() * 62);
    captcha += possible.charAt(n);
  }
                
  document.getElementById("captcha_string").innerHTML = captcha;
}

function compareto(){
  if (captcha == document.getElementById("bar").value){
    modal.style.display = "none";
    send_to_heaven();
  } else {
    myFunction();
  }
}

function send_to_heaven() {
  console.log("submitted file :O")
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

form.addEventListener('submit', (event) => {
  modal.style.display = "block";
  myFunction()
  event.preventDefault();
})
