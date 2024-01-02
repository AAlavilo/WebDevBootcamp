const form = document.querySelector("#addForm");
const input = document.querySelector("#textInput");
const list = document.querySelector("#toDo");
const priorityBoxes = document.querySelectorAll(".priorityBox");

// Function to uncheck other radio buttons in the same group
function uncheckOthers(checkedBox) {
    priorityBoxes.forEach(function (box) {
        if (box !== checkedBox) {
            box.checked = false;
        }
    });
}

// Add click event listener to each radio button
priorityBoxes.forEach(function (box) {
    box.addEventListener("click", function () {
        uncheckOthers(box); // Uncheck other radio buttons
    });
});

// Function to create a delete button and add functionality to remove the list item
function createDeleteButton() {
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Remove item from the list";
    deleteButton.classList.add("deleteButton")
    deleteButton.addEventListener("click", function () {
        this.parentNode.remove(); // Remove the list item when the delete button is clicked
    });
    return deleteButton;
}


form.addEventListener("submit", function(e) {
    e.preventDefault();         //prevents changing web-address when submitting
    console.log("input.value"); //prints the text in your input to the console

    const listItem = input.value;

    const newLi = document.createElement("li");
    newLi.innerText = listItem;

    const deleteButton = createDeleteButton();
    newLi.appendChild(deleteButton);

    let selectedPriority = "default";
    priorityBoxes.forEach(function(box) {
        if (box.checked) {
            selectedPriority = box.value;
            
        }
    });

    const prBox = document.createElement("div");
    prBox.classList.add(`priority-${selectedPriority}`);

    newLi.prepend(prBox)

    list.append(newLi);
    input.value = "";
});