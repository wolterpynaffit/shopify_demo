
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



  AOS.init();
