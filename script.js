
// tab section's script
let tabBtns = document.querySelectorAll('.tab-single-btn');
let tabContents = document.querySelectorAll('.tab-content-products');



tabBtns.forEach((singleTabBtn,ind) => {


  singleTabBtn.addEventListener('click',function(event){

      
    // remove all the active class from the tab-btns
    tabBtns.forEach((v,i) => {
      v.classList.remove('tab-btn-active')
    })
    
    // add the active class in the btn
    singleTabBtn.classList.add('tab-btn-active');


    // show tab content according to index of btn
    tabContents.forEach((singleTabContent,tabInd) => {
      if(tabInd == ind){
        singleTabContent.classList.add('tab-content-active')
      }else{
        singleTabContent.classList.remove('tab-content-active')
      }
    })

    
  })
})


// A $( document ).ready() block.
$( document ).ready(function() {
  $('.first-accordion-items').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  
});


