var btMenu = document.getElementById("menu-mobile");
var menu = document.getElementById("menu");
var links = document.querySelectorAll(".menu__link");
var icon = document.querySelector("#menu-mobile i");

btMenu.addEventListener('click', function(e){
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
    icon.classList.remove('bi-x'); // remove a classe 'bi-x' quando o menu estiver fechado
    icon.classList.add('bi-list'); // adiciona a classe 'bi-list' quando o menu estiver fechado
    icon.style.color = '#323232';
  } else {
    menu.style.display = 'flex';
    icon.classList.remove('bi-list'); // remove a classe 'bi-list' quando o menu estiver aberto
    icon.classList.add('bi-x'); // adiciona a classe 'bi-x' quando o menu estiver aberto
    icon.style.color = 'white';
  }
  e.preventDefault();
});

var links = document.querySelectorAll(".menu__link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    if (window.innerWidth <= 640) {
      menu.style.display = 'none';
      icon.classList.remove('bi-x'); // remove a classe 'bi-x' quando o menu estiver fechado
      icon.classList.add('bi-list'); // adiciona a classe 'bi-list' quando o menu estiver fechado
      icon.style.color = '#323232';
    }
  });
}
