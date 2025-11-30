// eventListener = Listen for specific events to create interactive web pages 
// events : click, mouseover , mouseout
//  .addEventListener(event, callback)

const myBox = document.getElementById("myBox");

const myButton = document.getElementById("myButton");
/*
function changeColor(event){
  console.log(event);
}

*/
/*
function changeColor(event){
  event.target.style.backgroundColor ="tomato";
  event.target.textContent = "OMG! 😵‍💫 ";
}
  
myBox.addEventListener("click" , changeColor);

*/

/*
myBox.addEventListener("click" , function(event){
    event.target.style.backgroundColor ="tomato";
  event.target.textContent = "OMG! 😵‍💫 ";
});
*/
/*
myBox.addEventListener("click" , event =>{
    event.target.style.backgroundColor ="tomato";
  event.target.textContent = "OMG! 😵‍💫 ";
});



myBox.addEventListener("mouseover" , event =>{
    event.target.style.backgroundColor ="yellow";
  event.target.textContent = "Don't dO it! 😵 ";
});


myBox.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor ="aqua";
  event.target.textContent = "Click Me 🤗 ";
});
*/
/*

myButton.addEventListener("click" , event =>{
    event.target.style.backgroundColor ="tomato";
  event.target.textContent = "OMG! 😵‍💫 ";
});



myButton.addEventListener("mouseover" , event =>{
    event.target.style.backgroundColor ="yellow";
  event.target.textContent = "Don't dO it! 😵 ";
});


myButton.addEventListener("mouseout" , event =>{
    event.target.style.backgroundColor ="aqua";
  event.target.textContent = "Click Me 🤗 ";
});

*/
myButton.addEventListener("click" , event =>{
    myBox.style.backgroundColor ="tomato";
  myBox.textContent = "OMG! 😵‍💫 ";
});



myButton.addEventListener("mouseover" , event =>{
  myBox.style.backgroundColor ="yellow";
 myBox.textContent = "Don't dO it! 😵 ";
});


myButton.addEventListener("mouseout" , event =>{
  myBox.style.backgroundColor ="aqua";
myBox.textContent = "Click Me 🤗 ";
});