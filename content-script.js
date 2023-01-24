 
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("copy-button")) {
      var code = event.target.previousElementSibling;
      var text = code.textContent;
      navigator.clipboard.writeText(text);
    }
  });

var preElements = document.querySelectorAll("pre");
  for (var i = 0; i < preElements.length; i++) {
    var button = document.createElement("button");
    button.classList.add("copy-button");
    button.textContent = "Copy";
    preElements[i].appendChild(button);
    }
preElements[i].addEventListener("click", function(event) {
    if(event.target.classList.contains("copy-button")){
        var code = event.target.previousElementSibling;
        var text = code.textContent;
        navigator.clipboard.writeText(text);
    }
});
    
