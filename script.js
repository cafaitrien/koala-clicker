// 1. get the element we want (mqybe document.getElementbyID?)
//query selector only takes first item with class name. Since we only have one class clickable, all is good
let clickable = document.querySelector("img.clickable");
clickable.addEventListener("click", clickCounter)
// 2. elVariableName.click syntax or addEventListener syntax (see debugging project for example)
// declare variable counter
let counter = 0;
console.log("counter: ", counter);
// click handler function

function clickCounter(event){
  // track total clicks - increment the counter variable
  counter++;
  // output click count to container in DOM
  console.log("counter", counter);

  // get the container, update its contents
  let container = document.querySelector("p#clickcount");

  if (counter === 10) {
    container.innerHTML = "Koala has been klicked " + counter + " times.";
  } else if (counter === 20) {
    container.innerHTML = "Koala has been klicked " + counter + " times.";
  } else {
    container.innerHTML = counter;
  }
}
