
//          NAVBAR

const ul = document.querySelector('.nav ul')
const toggle = document.querySelector('.menu input')

toggle.addEventListener('click', function(){
    ul.classList.toggle('slideNav')

})




//         SLIDER AND AUTOSLIDE


let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slideWidth = document.querySelector('.slide').clientWidth;
    const newTransformValue = -index * slideWidth + 'px';
    sliderWrapper.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);

}
setInterval(nextSlide, 3000);


const submit = document.querySelector('.submit')
const usName = document.querySelector('.username')
const email = document.querySelector('.email')
var hasil = ''

submit.addEventListener('click', function(e){
    e.preventDefault()
    var allInput = document.querySelectorAll('.contactUs form input')
    allInput

    
    var allValid = document.querySelector('.all')
    var getUsName = usName.value
    var getEmail = email.value

    if(getUsName === '' || getEmail === ''){
        allValid.innerHTML = 'data tidak boleh kosong'
    }

    if(getUsName.value && getEmail.value){
        allValid.innerHTML = ''
    }

   
 
})