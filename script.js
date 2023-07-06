const collapseBtn = document.getElementById('collapse-btn');
const rightcollapseBtn = document.getElementById('right-collapse-btn');
const mainNav= document.getElementById('main-nav');
const rightNav= document.getElementById('right-nav');

collapseBtn.addEventListener('click', function() {
  mainNav.classList.toggle('collapsed');
  document.getElementById("container").style.width="100vw";
});
rightcollapseBtn.addEventListener('click', function() {
  rightNav.classList.toggle('rightcollapsed');
});
