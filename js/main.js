//responsive ẩn hiện menu trên header

const headerBar=document.querySelector('.header-bar')
const overlay=document.querySelector('.header-overlay')
const buttonHeader = document.querySelector('.button-header')

headerBar.addEventListener('click', ()=>{
    overlay.classList.toggle('show-overlay')
    buttonHeader.classList.toggle('show-menu')

})
overlay.addEventListener('click', ()=>{
    overlay.classList.remove('show-overlay')
    buttonHeader.classList.remove('show-menu')

})


//làm thanh tăng giảm số lượng
document.addEventListener("DOMContentLoaded", function () {
    const quantityInput = document.querySelector(".product-wrap__number");
    const quantityField = quantityInput.querySelector(".product-number");
    const incrementButton = quantityInput.querySelector(".increment");
    const decrementButton = quantityInput.querySelector(".decrement");
  
    Button.addEventListener("click", function () {
      quantityField.stepUp();
    });
  
    decrementButton.addEventListener("click", function () {
      if (quantityField.value > quantityField.min) {
        quantityField.stepDown();
      }
    });
  });
  

