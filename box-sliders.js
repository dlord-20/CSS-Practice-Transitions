const boxes = document.querySelectorAll('.box');

console.log(boxes);

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

    boxes[e].style.top = '-35px';
    if(!zero) {
        addTopStyle(boxes[e - 1]);
        addTransparency(boxes[e - 1], adjacentTransparency);
    }
    if(!max) {
        addTopStyle(boxes[e + 1]);
        addTransparency(boxes[e + 1], adjacentTransparency);
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
    })
}

boxes.forEach((element, index) => {
    element.addEventListener('mouseover', () => handleHoverEnter(index));
    element.addEventListener('mouseout', () => handleHoverExit(index));
});