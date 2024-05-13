// for mobile
const burgericon = document.querySelector("#burger");
const navbarMenu = document.querySelector("#nav-links");

burgericon.addEventListener("click", () => {
  navbarMenu.classList.toggle("is-active");
});
// tabs
const tabs = document.querySelectorAll(".tabs li");
const tabContentBoxes = document.querySelectorAll("#tab-content > div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");

    const target = tab.dataset.tab;
    tabContentBoxes.forEach((box) => {
      if (box.getAttribute("id") === target) {
        box.classList.remove("is-hidden");
      } else {
        box.classList.add("is-hidden");
      }
    });
  });
});
// modal
// const signupbutton = document.querySelector("#signup");
// const modalBg = document.querySelector(".modal-background");
// const modal = document.querySelector(".modal");
// signupbutton.addEventListener("click", () => {
//   modal.classList.add("is-active");
// });

// modalBg.addEventListener("click", () => {
//   modal.classList.remove("is-active");
// });
document.addEventListener("DOMContentLoaded", function () {
  const signupButton = document.querySelector("#signup");
  const modalBg = document.querySelector(".modal-background");
  const modal = document.querySelector(".modal");

  if (signupButton) {
    signupButton.addEventListener("click", () => {
      modal.classList.add("is-active");
    });
  }

  if (modalBg) {
    modalBg.addEventListener("click", () => {
      modal.classList.remove("is-active");
    });
  }
});
