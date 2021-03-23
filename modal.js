"use strict";

let modalButtonCart = document.querySelector(".header__button");  
  modalButtonCart.onclick = function() {                       
    showModalCart()
  }

  function showModalCart() {  
    let modalCart = document.querySelector(".modalwindow"); 
    modalCart.style.display = "block";        
    setTimeout(function() {              
      modalCart.style.opacity = 1           
    }, 10);
    
    let hideButtonCart = document.querySelector(".hide-modal") 
    hideButtonCart.onclick = function() {  
      modalCart.style.display = "";   
      hideButtonCart.onclick = null;     
    }
  }