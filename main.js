
// part of the buttons functions 

const dropDownButtons = document.querySelectorAll('.expandButton');
const expandingSections = document.querySelectorAll('.expandable');


function dropDownAnswer(){
    console.log('bob said hi')
        this.classList.toggle('active');

        let targetExpandableDiv = this.dataset.targetButton; expandingSections.forEach(section =>{
            if (targetExpandableDiv == section.dataset.targetMore){
                section.classList.toggle('collapse');
            }
        })

}




dropDownButtons.forEach(button=> {
    button.addEventListener ('click', dropDownAnswer)
})

// part of the click containers function 

$('.slider-container').slick({
    autoplay: false,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: true,
    accessibility: true,
    dots: false,
    fade: false,
    infinite: true,
    pauseOnHover: false,
    pauseOnDotsHover: true,
});


// this is for the APPEAR on scroll commands 
  AOS.init();


// this is for the before and after galler slide 

  $("#ba-slider").on("input change", (e)=>{
    const sliderPos = e.target.value;
    // Update the width of the foreground image
    $('.ba-foreground-img').css('width', `${sliderPos}%`)
    // Update the position of the slider button
    $('.ba-slider-button').css('left', `calc(${sliderPos}% - 18px)`)
  });
