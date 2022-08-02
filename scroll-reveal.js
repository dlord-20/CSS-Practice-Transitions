const revealItem = (item) => {
    // var windowHeight = window.innerHeight;
    // var elementTop = item.getBoundingClientRect().top;
    // var elementVisible = 200;

    // if (elementTop < windowHeight - elementVisible) {
      item.classList.add("active");
    // } else {
    //   item.classList.remove("active");
    // }
    
}

const disappearItem = (item) => {
    item.classList.remove("active");
}

const reveal = () => {
    var reveals = document.querySelectorAll(".reveal-item");
    let time = 500;
    // setTimeout(() => revealItem(reveals), 2000);
    for (var i = 0; i < reveals.length; i++) {
        const item = reveals[i];
        setTimeout(() => revealItem(item), time);
        time *= 1.2;
    }
}

const disappear = () => {
    var reveals = document.querySelectorAll(".reveal-item");
    for (var i = 0; i < reveals.length; i++) {
        disappearItem(reveals[i]);
    }

}

const revealContainer = () => {
    const container = document.querySelectorAll(".reveal-container");
    const item = container[0];
    var windowHeight = window.innerHeight;
    var elementTop = item.getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      item.classList.add("reveal-active");
      reveal();
    } else {
      item.classList.remove("reveal-active");
      disappear();
    }
}

window.addEventListener("scroll", () => revealContainer());
