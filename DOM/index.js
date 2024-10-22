
function printLog() {
    console.log('hola');
}
// 1. Function to change text
function changeText() {
    const titleElement = document.getElementById('title');
    titleElement.textContent = 'New Title Text';
}

// 2. Function to toggle class
function toggleHighlightClass() {
    const firstParagraph = document.querySelector('p');
    firstParagraph.classList.toggle('highlight');
}

// 3. Function to manipulate attributes
function manipulateAttributes() {
    const firstParagraph = document.querySelector('p');
    firstParagraph.setAttribute('data-info', 'This is a data attribute');
    alert(firstParagraph.getAttribute('data-info'));
}

// 4. Function to change style
function changeStyle() {
    const titleElement = document.getElementById('title');
    titleElement.style.color = 'green';
}

// 5. Function to create a new item
function createNewItemLargo() {
    const items = document.querySelectorAll('li');
    const lastItem = items[items.length -1];
    const textLastItem = lastItem.innerText;
    const splitValues = textLastItem.split(' ');
    const value = splitValues[1];
    const valueNumber = parseInt(value);
    const result = valueNumber + 1;

    const newItem = document.createElement('li');
    newItem.innerText = 'Item ' + result;

    document.getElementById('list').appendChild(newItem);
}

function createNewItem() {
    const items = document.querySelectorAll('li');
    const result = items.length + 1;

    const newItem = document.createElement('li');
    newItem.innerText = 'Item ' + result;

    document.getElementById('list').appendChild(newItem);
}


// 6. Function to remove last item
function removeLastItem() {
    const list = document.getElementById('list');
    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
}

// 7. Function to handle event
function handleEvent() {
    alert('Event triggered!');
}

// 8. Function to demonstrate form interaction
function formInteraction() {
    const name = document.getElementById('nameInput').value;
    document.querySelector('h1').innerText = (`Hello, ${name}!`);
}

// 9. Function to show alert (for event example)
function showAlert() {
    alert('Button clicked!');
}
