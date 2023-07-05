const collapseBtn = document.getElementById('collapse-btn');
const mainNav= document.getElementById('main-nav');

collapseBtn.addEventListener('click', function() {
  mainNav.classList.toggle('collapsed');
});