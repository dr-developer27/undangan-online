const portoBox = document.querySelector(".portoBox").children;
const ulTag = document.querySelector(".portoPagination ul");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const maxCard = 28;
let index = 1;
let indexLength = Math.ceil(portoBox.length / maxCard);

function showCard(indexLength, index) {
  let liTag = "";
  let activeLi;
  let beforePages = index - 1;
  let afterPages = index + 1;

  for (let i = 0; i < portoBox.length; i++) {
    portoBox[i].classList.remove("show");
    portoBox[i].classList.add("hide");

    if (i >= index * maxCard - maxCard && i < index * maxCard) {
      portoBox[i].classList.add("show");
      portoBox[i].classList.remove("hide");
    }
  }

    if (index > 1) {
      liTag += `<li class="btn prev" onclick="showCard(indexLength, ${index - 1})"><span><i class="fa-solid fa-angle-left"></i></li>`;
    }
  
    if (index > 2) {
      liTag += `<li class="numb" onclick="showCard(indexLength, 1)"><span>1</span></li>`;
      if (index > 3) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
    }
  
    if (index == indexLength) {
      beforePages = beforePages - 2;
    } else if (index == indexLength - 1) {
      beforePages = beforePages - 1;
    }
  
    if (index == 1) {
      afterPages = afterPages + 2;
    } else if (index == 2) {
      afterPages = afterPages + 1;
    }
  
    for (let i = beforePages; i <= afterPages; i++) {
      if( i  > indexLength){
        continue;
      }
  
      if (i == 0) {
        i = i + 1;
      }
  
      if (i == index) {
        activeLi = "active";
      } else {
        activeLi = "";
      }
      liTag += `<li class="numb ${activeLi}" onclick="showCard(indexLength, ${i})"><span>${i}</span></li>`;
    }
  
    if (index < indexLength - 1) {
      if (index < indexLength - 2) {
        liTag += `<li class="dots"><span>...</span></li>`;
      }
      liTag += `<li class="numb" onclick="showCard(indexLength, ${indexLength})"><span></span>${indexLength}</li>`;
    }
  
    if (index < indexLength) {
      liTag += `<li class="btn next" onclick="showCard(indexLength, ${index + 1})"><span><i class="fa-solid fa-angle-right"></i></span></li>`;
    }
  
    ulTag.innerHTML = liTag;
}

window.onload = showCard(indexLength,index);
