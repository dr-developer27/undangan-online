const signinBtn = document.querySelector('.signinBtn');
const signupBtn = document.querySelector('.signupBtn');
const formBx = document.querySelector('.formBx');
const containerLr = document.querySelector('.containerLr');

  signupBtn.onclick = function(){
    formBx.classList.add('active');
    containerLr.classList.add('active');
  };
  signinBtn.onclick = function(){
    formBx.classList.remove('active');
    containerLr.classList.remove('active');
    containerLr.classList.remove('#daftar');
  };
  function forget(){
    let signinForm = document.querySelector('.form.signinForm');
    let forget = document.querySelector('.forgetForm');
    signinForm.classList.add('active');
    forget.classList.add('active');
  }

  function back(){
    let signinForm = document.querySelector('.form.signinForm');
    let forget = document.querySelector('.forgetForm');
    signinForm.classList.remove('active');
    forget.classList.remove('active');
  }

  
  function checkAll(){
    let checkBox = document.getElementsByName('checkBox');
    let checkBoxLeng = checkBox.length;
    for( let i = 0; i < checkBoxLeng; i++){
      checkBox[i].checked = true;
    }
  }
 