function parallax(event) {
  // console.log(event);
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    // console.log(layer.getAttribute("data-speed"));
    layer.style.transform = `translateX(${(event.clientX * speed) / 2000}px)`;
  });
}

const result = _.add(2, 3);
console.log(result); // 5 CHECK lodash.throttle

document.addEventListener("mousemove", parallax);
document.addEventListener("touchmove", parallaxTouch); // yoo-hoo!!))) It`s works!

function parallaxTouch(event) {
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    layer.style.transform = `translateX(${
      (event.changedTouches[0].clientX * speed) / 1000
      // (event.changedTouches[0].pageX * speed) / 1000
    }px)`;
  });
}

// document.addEventListener("mousemove", _.throttle(parallax, 5));
// document.addEventListener("touchmove", _.throttle(parallaxTouch, 5)); // yoo-hoo!!))) It`s works!
