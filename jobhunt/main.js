//Access the Images
let slideImages = document.querySelectorAll('img');
//Access the next and prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

//code for next button
next.addEventListener('click', slideNext);
function slideNext(){
  slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
  if(counter >= slideImages.length-1){
    counter =0;
  }
  else{
    counter++;
  }
  slideImages[counter].style.animation = 'next2 0.5s eas-in forwards';
  indicator();
}

//code for pev button
prev.addEventListener('click', slidePrev);
function slidePrev(){
  slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
  if(counter == 0){
    counter = slideImages.length-1;
  }
  else{
    counter++;
  }
  slideImages[counter].style.animation = 'prev2 0.5s eas-in forwards';
  indicator();
}

// Auto slideing
function autoSliding(){
  deletIntervarl =setInterval(timer, 1000);
  function timer(){
    slideNext();
    indicator();
  }
}
autoSliding();

//stop auto sliding when mouse is over
const container = document.querySelector('.carousel');
container .addEventListener('mouseover', function(){
  clearInterval(deletInterval);
});

// Resume sliding when mouse is out
container .addEventListener('mouseout' , autoSliding);

//Add and Remove active class from the indicators
function indicator(){
  for(i =0; i< DOMStringList.length; i++){
    dots[i].className = dots[i].className.replace(' active','');
  }
  dots[counter].classroom += 'active';
}

//add click event to the indicator
function switchimage(currentImage){
  currentImage.classList.add('active');
  var imageId = currentImage.getAttribute('attr');
  if(imageId > counter){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
  }
  else if(imageId == counter){
    return;
  }
  else {
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    counter = imageId;
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
  }
  indicator();

}