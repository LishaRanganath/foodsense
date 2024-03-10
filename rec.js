var checkboxes = document.querySelectorAll('input[type="checkbox"][name="check"]');
    
// Add event listener to each checkbox
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
        // Get the corresponding label using the "for" attribute
        var label = document.querySelector("label[for='" + checkbox.id + "']");
        // Toggle the line-through style of the label based on checkbox state
        if (checkbox.checked) {
            label.style.textDecoration = "line-through";
        } else {
            label.style.textDecoration = "none";
        }
    });
});

