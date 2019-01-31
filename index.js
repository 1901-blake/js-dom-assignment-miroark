// PART II

// Part II will focus on Javascript's ability to manipulate the DOM.
// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
  function getUSA(startingElement) {
    let list;

    if (!startingElement) {
        list = document.getElementsByTagName('html');
    }
    else {
        list = startingElement;
    }
      
    for (let i = 0; i < list.length; i++) {
        if (list[i].innerText === 'USA') {
            console.log(list[i].innerText)
        }
        else {
            const children = list[i].children;
            getUSA(children);
        }
    }
  }
  getUSA();

// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    const table = document.getElementsByTagName('table')[0].tBodies[0].rows;
    let listOfPeopleInSales = [];

    for (let i = 1; i < table.length; i++) {
        if (table[i].getElementsByTagName('td')[1].innerText  === 'Sales') {
            listOfPeopleInSales.push(table[i].getElementsByTagName('td')[0].innerText )
        }
    }
    console.log(listOfPeopleInSales);
}
getPeopleInSales();
  
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>
function getAnchorChildren() {
    const anchors = document.getElementsByTagName('a');
    let listOfSpans = [];

    for (let i = 0; i < anchors.length; i++) {
        if (anchors[i].getElementsByTagName('span').length > 0){
            listOfSpans.push(anchors[i].getElementsByTagName('span')[0].innerText);
        }
    }

    console.log(listOfSpans);
}
getAnchorChildren();
  
// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    const skillselect = document.getElementsByName('skills');
    console.log(skillselect[0][skillselect[0].selectedIndex].innerText);
}  
getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attr[0].selectedIndex
// Print the element that has the attribute.
function getCustomAttribute() {
    const list = document.querySelectorAll('[data-customAttr]');
    console.log(list);
    //I'm not sure what's being requested beyond this.
}
getCustomAttribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>

// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element

const inputNum1 = document.getElementById('num1');
inputNum1.setAttribute('placeholder','First number to add');
inputNum1.setAttribute('onchange','addNums(event)');

const inputNum2 = document.getElementById('num2');
inputNum2.setAttribute('placeholder','Second number to add');
inputNum2.setAttribute('onchange','addNums()');

function addNums() {
    const sumSpan = document.getElementById('sum');
    const value = Number(inputNum1.value, 10) + Number(inputNum2.value, 10); 
    if (value) {
        sumSpan.innerText = value;
    } else {
        sumSpan.innerText = 'Cannot add';
    }
}

// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.
const skillsSelect = document.getElementsByName('skills')[0];
skillsSelect.setAttribute('onchange','skillAlert()');

function skillAlert() {
    alert(`Are you sure ${skillsSelect.value} is one of your skills?`);
}

// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor
let oldFav = '';
let newFav = '';
const colorSelect = document.getElementsByName('colors')[0];
colorSelect.setAttribute('onChange', 'setNewFaveColor()');

function setNewFaveColor(){
    if (newFav) {
        oldFav = newFav;
        newFav = colorSelect.value;
        alert(`So you like ${newFav} more than ${oldFav} now?`);
    } else {
        newFav = colorSelect.value;
    }
}
// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.

// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.

// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).