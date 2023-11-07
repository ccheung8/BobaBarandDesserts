const check = document.getElementById("checkbox");
const mobileMenu = document.getElementById("mobile-nav-menu");
const topBun = document.querySelector(".hamburger-icon span:nth-child(2)");
const botBun = document.querySelector(".hamburger-icon span:nth-child(4)");

console.log(topBun);

// resets hamburger
window.addEventListener('load', () => {check.checked = false;});
// checks for window resize 
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    topBun.style.animation = "";
    botBun.style.animation = "";
    mobileMenu.style.display = "none";
    check.checked = false;
    mobileMenu.classList.remove("menu-shown");
    document.body.style.overflow = "scroll";
  }
});

check.addEventListener('click', () => {
  mobileMenu.classList.toggle("menu-shown");
  if (check.checked) {
    topBun.style.animation = "";
    botBun.style.animation = "";
    mobileMenu.style.display = "block";
    mobileMenu.style.opacity = 1;
    document.body.style.overflow = "hidden";
  } else {
    topBun.style.animation = "revert-top 500ms ease";
    botBun.style.animation = "revert-bottom 500ms ease";
    window.setTimeout(() => {
      mobileMenu.style.opacity = 0;
      mobileMenu.style.display = "none";
      document.body.style.overflow = "scroll";
    }, 400);
  }
})