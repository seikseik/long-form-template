let page = document.getElementById('page-container');

let transition = 'top .8s cubic-bezier(0.77, 0, 0.175, 1)';
page.style.transition = transition;
page.onclick = slideDown;

function slideDown(e) {
  console.log(e.target.className)
  if (e.target.id != 'next') {
    return;
  }

  page.onclick = '';
  self = e.target.parentNode;
  var offset = self.getBoundingClientRect();
  var scroll = self.offsetTop;

  page.style.top = (-offset.height-offset.top) + 'px';

  setTimeout(function () {
    page.style.transition = 'none';
    page.style.top = '';
    window.scrollTo(0, offset.height+scroll);
    page.style.transition = transition;
    page.onclick = slideDown;

  }, 700);
}
