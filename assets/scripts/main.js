var imageDots = document.getElementById("dots-open");

function changeImage() {
  if (imageDots.src.match("assets/images/icons/dots-menu.svg")) {
    imageDots.src = "assets/images/icons/open-dots-menu.svg";
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".main-footer").style.display = "none";
  } else {
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-footer").style.display = "block";
    imageDots.src = "assets/images/icons/dots-menu.svg";
  }
}

function changeIcon() {
  if (imageDots.src.match("assets/images/icons/dots-menu.svg")) {
    imageDots.src = "../assets/images/icons/open-dots-menu.svg";
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".main-footer").style.display = "none";
  } else {
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-footer").style.display = "block";
    imageDots.src = "../assets/images/icons/dots-menu.svg";
  }
}

function changeDots() {
  if (imageDots.src.match("assets/images/icons/dots-menu.svg")) {
    imageDots.src = "../../assets/images/icons/open-dots-menu.svg";
    document.querySelector(".main-content").style.display = "none";
    document.querySelector(".main-footer").style.display = "none";
  } else {
    document.querySelector(".main-content").style.display = "block";
    document.querySelector(".main-footer").style.display = "block";
    imageDots.src = "../../assets/images/icons/dots-menu.svg";
  }
}

let openBtn = document.querySelector(".openSideNav");
openBtn.addEventListener("click", () => {
  showNav();
});
let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
  hideNav();
});
function showNav() {
  document.querySelector(".sideNav").style.width = "500px";
  document.querySelector(".sideNav").style.boxShadow =
    "-13px 19px 25px 15px rgba(0, 0, 0, 0.08)";
  document.querySelector(".navbar").style.marginRight = "300px";
  document.querySelector(".dots").style.visibility = "hidden";
}
function hideNav() {
  document.querySelector(".sideNav").style.width = "0";
  document.querySelector(".sideNav").style.boxShadow = "none";
  document.querySelector(".navbar").style.marginRight = "0px";
  document.querySelector(".dots").style.visibility = "visible";
}

//Splide

//AOS
AOS.init();
