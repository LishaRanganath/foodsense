function add() {
    // Get the value of the button clicked
    var data = event.target.value;

    // Create a new list item
    var listItem = document.createElement("li");
    listItem.textContent = data;
    listItem.classList.add("list-item");
    listItem.style.fontSize="20px"

    // Create a remove button for the list item
    var removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");
    removeButton.onclick = function() {
        listItem.remove();
    };

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the list container
    var listContainer = document.getElementById("list-cont");
    listContainer.appendChild(listItem);
}
