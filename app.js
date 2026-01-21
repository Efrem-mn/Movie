document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('toggle-view').addEventListener('click', () => {
    document.querySelectorAll('.movies li img').forEach((anchor, index) => {
        anchor.style.viewTransitionName = `movie-${index}`;
    });
    document.startViewTransition(() => {
        document.querySelector('.movies').classList.toggle('column');
    });
  });
  const searchBox = document.getElementById("searchBox");
const searchIcon = document.getElementById("searchIcon");

searchIcon.addEventListener("click", () => {
  searchBox.classList.toggle("active");
  searchBox.querySelector("input").focus();
});
document.addEventListener("click", (e) => {
  if (!searchBox.contains(e.target)) {
    searchBox.classList.remove("active");
  }
});
const userMenu = document.getElementById("userMenu");
const userAvatar = document.getElementById("userAvatar");

userAvatar.addEventListener("click", (e) => {
  e.stopPropagation();
  userMenu.classList.toggle("active");
});

document.addEventListener("click", () => {
  userMenu.classList.remove("active");
});

});