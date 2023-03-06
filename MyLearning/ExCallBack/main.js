function changeBackgroundColor(color, callback) {
    document.body.style.backgroundColor = color;
    callback();
  }
  
  function displayMessage() {
    console.log("Background color changed");
  }
  
  var button = document.getElementById("myButton");
  button.addEventListener("click", function() {
    changeBackgroundColor("yellow",displayMessage);
  });
