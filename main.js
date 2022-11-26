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

