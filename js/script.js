// Javascript for hamburger navbar

const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', ()=>{
     btn.classList.toggle('open')
     nav.classList.toggle('flex')
     nav.classList.toggle('hidden')
});
// Javascript for corousel with automatic click
currentSlideID = 1;
sliderElement = document.getElementById('slider');
totalSlide = sliderElement.childElementCount;
console.log(totalSlide);
 
function next() {
if(currentSlideID < totalSlide)
    currentSlideID++;
    showSlide();
}

function pref(){
    if(currentSlideID > 1)
    currentSlideID--;
    showSlide();
}


function showSlide(){
    setTimeout(showSlide, 2000);
    slides = document.getElementById('slider').getElementsByTagName('li');
    for(let index = 0; index < totalSlide; index++){
        const element = slides[index];
        if(currentSlideID===index+1){
            element.classList.remove('hidden');
        }else{
            element.classList.add('hidden');
         }
    }
}
 



setInterval(function(){
    if(currentSlideID == 1){
        next();
    } else if(currentSlideID == 2){
        pref();
    }
}, 3000);

