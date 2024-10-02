
const icon = document.querySelector(".icon-section");
const values = document.querySelectorAll(".value");
const selectedValue = document.querySelector(".selected-value");
const questionSection = document.querySelector(".question-section");
const thankYouSection = document.querySelector(".thank-you-section")
const btn_submit = document.querySelector(".btn-submit");

let selecteRating = 0 ;
values.forEach( function(rating){
    rating.addEventListener("click",(e)=>{
        for( const element of values){
            if ( element == e.target){
                 element.classList.add("background-orange");
                 selecteRating = Number(element.textContent);
            }else{
                element.classList.remove("background-orange");
            };
        };
    });
});

btn_submit.addEventListener("click",()=>{
   questionSection.classList.add("hidden");
   thankYouSection.classList.remove("hidden");
   selectedValue.textContent = selecteRating;
})


icon.addEventListener("mouseover",()=>{
    rotateImage();
})


// icon rotataion function 

function rotateImage() {
    const image = document.getElementById('image');
    image.style.transform = 'rotate(360deg)';

    // Reset the image rotation after 2 seconds (optional)
    setTimeout(() => {
        image.style.transform = 'rotate(0deg)';
    }, 2000);
}