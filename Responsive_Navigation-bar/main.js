//js đóng mở thêm cả overlay nữa nè :) 
// khai bao cac bien tro toi icon nav , icon close, nav-mobile, overlay
const NavIcon = document.querySelector('.nav__icon');
const ClosedIcon = document.querySelector('.closed-icon');
const NavListMobile = document.querySelector('.nav__mobile');
const Overlay = document.querySelector('.nav__overlay');

//open nav mobile
NavIcon.onclick = function() {
  
  NavListMobile.style.transform = 'translateX(0%)';
  Overlay.style.display = 'block';
}

//close nav mobile
ClosedIcon.onclick = function(){
  NavListMobile.style.transform = 'translateX(-100%)';
  Overlay.style.display = 'none';
}

// click overlay to closed nav mobile
Overlay.onclick = function(){
  NavListMobile.style.transform = 'translateX(-100%)';
  Overlay.style.display = 'none';
}