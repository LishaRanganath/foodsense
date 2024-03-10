const ipBox = document.getElementById("ip-box");
const lsCont = document.getElementById("list-cont");
function Add() {
  if (ipBox.value === "") {
    alert("you must enter a value");
  } else {
    lsCont.style.display = "flex";
lsCont.style.flexDirection = "column";

// Create a container for the checkbox and label
var container = document.createElement("div");
container.style.display = "flex";
container.style.alignItems = "center";

var checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";

var label = document.createElement("label");
label.htmlFor = "id";
label.appendChild(document.createTextNode(ipBox.value));

// Append checkbox and label to the container
container.appendChild(checkbox);
container.appendChild(label);

// Create a container for the button
var buttonContainer = document.createElement("div");
buttonContainer.style.marginLeft = "auto"; // Pushes the button to the right



var btn = document.createElement("button");
btn.innerHTML = "Remove";
btn.style.border = "2px solid black";
buttonContainer.appendChild(btn);

// Append the containers to lsCont
lsCont.appendChild(container);
lsCont.appendChild(buttonContainer);
lsCont.appendChild(document.createElement("br"));
ipBox.value="";
   
  }
  checkbox.addEventListener("change",()=>{
    if(checkbox.checked)
    {
      label.style.textDecoration="line-through";
    }
    else{
      label.style.textDecoration="none";
    }
});
btn.addEventListener("click", () => {
  // Remove the container when the button is clicked
  lsCont.removeChild(container);
  lsCont.removeChild(buttonContainer);
});

}
