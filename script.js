const collapseBtn = document.getElementById('collapse-btn');
const rightcollapseBtn = document.getElementById('right-collapse-btn');
const mainNav= document.getElementById('main-nav');
const rightNav= document.getElementById('right-nav');

collapseBtn.addEventListener('click', function() {
  mainNav.classList.toggle('collapsed');
  document.getElementById("card-container").classList.toggle('margin-left-16rem');
  document.getElementById("secondary-nav").classList.toggle('margin-left-4rem')


});
rightcollapseBtn.addEventListener('click', function() {
  rightNav.classList.toggle('rightcollapsed');
});
