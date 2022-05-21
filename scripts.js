const wrapperOuter  =  document.getElementById("wrapper-outer");
const wrapperPercent  =  document.getElementById("wrapper-percent");
const outer = document.getElementById("outer");
//const night = document.getElementById("night");

let width = document.body.clientWidth;
let imageWrapperPercent;

let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");
let image4 = document.getElementById("image4");


wrapperOuter.addEventListener('mousemove', mouseMove );

function mouseMove(e) {
  
  var x = e.clientX;
  console.log(x);
  
  var outerTracker = outer.getBoundingClientRect();
  let mousePointerPos;
  
  mousePointerPos = x - outerTracker.left;
  console.log(mousePointerPos);
  
  //wrapperPercent.style.width = x + "px"; // wrapper width using clientX
  wrapperPercent.style.width = mousePointerPos + "px"; // wrapper width using mouse postion in the box

}
