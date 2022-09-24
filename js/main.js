function parallax(event) {
  //   console.log(event);
  this.querySelectorAll(".layer").forEach((layer) => {
    let speed = layer.getAttribute("data-speed");
    // console.log(layer.getAttribute("data-speed"));
    layer.style.transform = `translateX(${(event.clientX * speed) / 2000}px)`;
  });
}
document.addEventListener("mousemove", parallax);
