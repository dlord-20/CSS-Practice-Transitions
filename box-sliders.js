const boxes = document.querySelectorAll('.box');
const boxImages = document.querySelectorAll('.box-img');
const boxTexts = document.querySelectorAll('.box-text');
const boxHeaders = document.querySelectorAll('.box-head');
const boxDescriptions = document.querySelectorAll('.box-description');

console.log(boxes);
console.log(boxImages);
console.log(boxTexts);
console.log(boxHeaders);
console.log(boxDescriptions);

const addTopStyle = (element) => {
    element.style.top = '-12.5px';
}

const removeTopStyle = (element) => {
    element.style.top = '0px';
}

const addTransparency = (element, amount) => {
    element.style.opacity = amount;
}

const removeTransparency = (element) => {
    element.style.opacity = '1';
}

const handleHoverEnter = (e) => {
    const adjacentTransparency = '.8';
    const siblingTransparency = '.4';
    const zero = (e === 0);
    const max = (e === boxes.length - 1);

    boxes[e].style.top = '-25px';
    boxes[e].style.width = '250px';
    boxImages[e].style.height = '175px';
    boxTexts[e].style.height = '200px'
    boxHeaders[e].style.fontSize = '1.35rem';
    boxDescriptions[e].style.fontSize = '1.1rem';
    if(!zero) {
        addTopStyle(boxes[e - 1]);
        addTransparency(boxes[e - 1], adjacentTransparency);
        boxes[e - 1].style.width = '220px';
        boxImages[e - 1].style.height = '165px';
        boxTexts[e - 1].style.height = '185px';
        boxHeaders[e - 1].style.fontSize = '1.15rem';
        boxDescriptions[e - 1].style.fontSize = '1.05rem';
    }
    if(!max) {
        addTopStyle(boxes[e + 1]);
        addTransparency(boxes[e + 1], adjacentTransparency);
        boxes[e + 1].style.width = '220px';
        boxImages[e + 1].style.height = '165px';
        boxTexts[e + 1].style.height = '185px';
        boxHeaders[e + 1].style.fontSize = '1.15rem';
        boxDescriptions[e + 1].style.fontSize = '1.05rem';
    }

    boxes.forEach((element, index) => {
        if(index !== e && index !== e - 1 && index !== e + 1) {
            addTransparency(element, siblingTransparency);
        }
    })
}

const handleHoverExit = (e) => {
    boxes.forEach((element) => {
        removeTopStyle(element);
        removeTransparency(element);
        element.style.width = '200px';
    })
    boxImages.forEach((element) => {
        element.style.height = '150px';
    })
    boxTexts.forEach((element) => {
        element.style.height = '175px';
    })
    boxHeaders.forEach((element) => {
        element.style.fontSize = '1.1rem';
    })
    boxDescriptions.forEach((element) => {
        element.style.fontSize = '1rem';
    })
}

boxes.forEach((element, index) => {
    element.addEventListener('mouseover', () => handleHoverEnter(index));
    element.addEventListener('mouseout', () => handleHoverExit(index));
});