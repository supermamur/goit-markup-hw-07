// () => {
//   const menuBtnRef = document.querySelector("[data-menu-button]");
//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || false;

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expanded", !expanded);
//   });
// };

(() => {
  const refs = {
    openMenuBtn: document.querySelector("[data-btn-open]"),
    closeMenuBtn: document.querySelector("[data-btn-close]"),
    menu: document.querySelector("[data-menu]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-menu-hidden");
  }
})();
