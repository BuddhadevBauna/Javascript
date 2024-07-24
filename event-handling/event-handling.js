// Basic event handling
console.log("Basic event handling:");
const paragraph = document.querySelector('#textParagraph');
document.querySelector('#changeTextButton').addEventListener('click', () => {
    paragraph.textContent = paragraph.textContent == 'Original Text' ? 'Text has been changed!' : 'Original Text';
}, false);
let toggleImageContainer = document.querySelector('#toggleImageContainer');
let toggleImage = document.querySelector('#toggleImage');
toggleImageContainer.addEventListener('dblclick', (e) => {
    if (toggleImage.style.visibility == 'hidden') {
        toggleImage.style.visibility = 'visible';
    } else {
        toggleImage.style.visibility = 'hidden';
    }
}, false);
console.log(".........................................");

// Mouse Event
console.log("Mouse Event:");
const p = document.querySelector('.paragraph');
p.addEventListener('mouseover', () => {
    p.style.backgroundColor = 'blue';
    p.style.color = 'white';
    p.style.borderColor = 'red';
});
p.addEventListener('mouseout', () => {
    p.style.backgroundColor = 'initial';
    p.style.color = 'initial';
    p.style.borderColor = 'initial';
});
console.log(".........................................");

// Keyboard events
console.log("Keyboard events:");
const inputField = document.querySelector('input');
const output = document.getElementById('output');
inputField.addEventListener('keydown', (e) => {
    console.log(`Key pressed: ${e.key}`);
});
inputField.addEventListener('keyup', () => {
    output.textContent = `Current value: ${inputField.value}`;
});
console.log(".........................................");

// Form events
console.log("Form events:");
const form = document.querySelector('#myForm');
const inputs = document.querySelectorAll('#myForm input');
let formData = {
    name: "",
    email: ""
};
// inputs.forEach((input) => {
//     input.addEventListener('change', (e) => {
//         const {name, value} = e.target;
//         console.log(name, value);
//         formData[name] = value
//     });
// });
// or
form.addEventListener('change', (e) => {
    const { name, value } = e.target;
    // console.log(name, value);
    formData[name] = value;
});
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(formData);
})

const selectElement = document.getElementById('mySelect');
const displayParagraph = document.getElementById('selectedValue');
selectElement.addEventListener('change', (e) => {
    const selectedValue = e.target.value;
    // console.log(selectedValue);
    displayParagraph.textContent = `Selected value: ${selectedValue}`;
});
console.log(".........................................");



// Event Propagation(Capturing, Target, Bubbling)
console.log("Event Propagation:");
// Capturing phase listeners
document.getElementById('parent').addEventListener('click', function(e) {
    console.log('Parent captured');
    // e.stopPropagation();
}, true); // true indicates capturing phase

// Target phase listener
document.getElementById('child').addEventListener('click', function(e) {
    console.log('Child clicked');
    // e.stopPropagation();
});

// Bubbling phase listeners
document.getElementById('parent').addEventListener('click', function(e) {
    console.log('Parent bubbled');
    // e.stopPropagation();
});
document.body.addEventListener('click', function() {
    console.log('Body bubbled');
});
console.log(".........................................");


// Event deligation
console.log("Event deligation:");
const itemList = document.getElementById('itemList');
// Add a click event listener to the parent element
itemList.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target.tagName);
    // Check if the clicked element is a list item
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent); // Log the text content of the clicked item
    }
});