function parallax(event) {
  // console.log(event);
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    // console.log(layer.getAttribute("data-speed"));
    layer.style.transform = `translateX(${(event.clientX * speed) / 2000}px)`;
    // layer.style.transform = `translateX(${
    //   (event.changedTouches[0].pageX * speed) / 1000
    // }px)`;
  });
}

document.addEventListener("mousemove", parallax);
document.addEventListener("touchmove", parallaxTouch); // yoo-hoo!!))) It`s works!

function parallaxTouch(event) {
  // console.log(event);
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    // console.log(layer.getAttribute("data-speed"));
    // layer.style.transform = `translateX(${(event.clientX * speed) / 2000}px)`;
    layer.style.transform = `translateX(${
      (event.changedTouches[0].pageX * speed) / 500
    }px)`;
  });
}
