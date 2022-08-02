const revealItem = (item) => {
      item.classList.add("active");
}

const disappearItem = (item) => {
    item.classList.remove("active");
}

const reveal = (string) => {
    var reveals = document.querySelectorAll(string);
    let time = 500;
    // setTimeout(() => revealItem(reveals), 2000);
    for (var i = 0; i < reveals.length; i++) {
        const item = reveals[i];
        setTimeout(() => revealItem(item), time);
        time *= 1.15;
    }
}

const disappear = (string) => {
    var reveals = document.querySelectorAll(string);
    for (var i = 0; i < reveals.length; i++) {
        const item = reveals[i];
        disappearItem(item);
    }   

}

const revealContainer = () => {
    const containers = document.querySelectorAll(".reveal-container");
    containers.forEach((container) => {
        const item = container;
        var windowHeight = window.innerHeight;
        var elementTop = item.getBoundingClientRect().top;
        var elementVisible = 200;
    
        if (elementTop < windowHeight - elementVisible) {
          item.classList.add("reveal-active");
          reveal('.reveal-item');
        } else {
          item.classList.remove("reveal-active");
          disappear('.reveal-item');
        }
    })

}

window.addEventListener("scroll", () => revealContainer());

const itemReveal = (item) => {
    var windowHeight = window.innerHeight;
    var elementTop = item.getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      revealItem(item);
    } else {
      disappearItem(item);
    }
}

const revealSecondGroup = () => {
    const containers = document.querySelectorAll(".reveal-test");
    var time = 500;
    containers.forEach((container) => {
        const item = container;
        setTimeout(() => itemReveal(item), time);
        time *= 1.15;
        
    })

}


window.addEventListener("scroll", () => revealSecondGroup());
