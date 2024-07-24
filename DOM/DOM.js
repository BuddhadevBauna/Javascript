// Selecting and manipulating elements
console.log("Selecting and manipulating elements:");
console.log(document.getElementById("heading"));//return single element
console.log(document.getElementsByClassName("heading"));//return array of element
console.log(document.getElementsByClassName("heading")[0]);
console.log(document.getElementsByTagName("h1"));//return array of element
console.log(document.getElementsByTagName("h1")[0]);
console.log(document.querySelector(".heading"));//return single element
console.log(document.querySelectorAll(".heading"));//return array of element
console.log(document.querySelectorAll(".heading")[0]);

const h1 = document.querySelector(".heading");
h1.textContent = "DOM Manipulation In JavaScript";
h1.innerHTML = '<i>DOM Manipulation</i>';

const description = document.querySelector(".description");
description.style.backgroundColor = "blue";
console.log("..........................................");

// Creating and appending elements
console.log("Creating and appending elements:");
const div = document.createElement('div'); 
div.classList.add("container");
div.textContent = "Create div element and add text content to it";
document.body.appendChild(div);
const li = document.createElement('li');
li.append(document.createTextNode("Third"));
document.querySelector('ul').appendChild(li);
console.log("..........................................");

// Removing elements
console.log("Removing elements:");
document.querySelector('ol li.li2').removeAttribute('class');
console.log(document.querySelectorAll('ol li')[1]);
document.querySelector('ol li.li3').remove();
let parent = document.querySelector('ol');
parent.removeChild(parent.lastElementChild);
console.log("..........................................");

// Modifying attribute and classes
console.log("Modifying attribute and classes:");
let image = document.querySelector('img');
console.log(image.getAttribute('src'));
console.log(image.classList);
setTimeout(() => {
    // Add fade-out class to animate opacity
    image.classList.add('fade-out');
    // Change the image source after a short delay
    setTimeout(() => {
        image.setAttribute('src', './download (1).jpeg');
        image.classList.remove('border-black');
        image.classList.add('border-blue');
        // Remove fade-out class to fade in the new image
        setTimeout(() => {
            image.classList.remove('fade-out');
        }, 50); // Ensure this matches the transition time
    }, 500); // Match this with the transition duration
}, 500);
console.log("..........................................");


// Event handling
console.log("Event handling:");
const button = document.querySelector("button");
let paragraph = document.querySelector('p');
button.addEventListener('click', () => {
    paragraph.textContent = "changed text content";
});
const changeColor = () => {
    paragraph.style.color = 'white';
}
paragraph.addEventListener('mouseover', changeColor);
paragraph.addEventListener('mouseleave', () => {
    paragraph.style.color = 'initial';
})
