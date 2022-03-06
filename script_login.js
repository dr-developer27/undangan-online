const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const containerLr= document.querySelector('.containerLr');
  

  signupBtn.onclick = function(){
    formBx.classList.add('active');
    containerLr.classList.add('active');
  };
  signinBtn.onclick = function(){
    formBx.classList.remove('active');
    containerLr.classList.remove('active');
    containerLr.classList.remove('#daftar');
  };