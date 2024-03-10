document.getElementById('hamburger-icon').addEventListener('click', function() {
    var menu = document.getElementById('sidebar-menu');
    if (menu.classList.contains('hidden')) {
       menu.classList.remove('hidden');
       menu.classList.add('showMenu');
    } else {
       menu.classList.remove('showMenu');
       menu.classList.add('hidden');
    }
   });

   const menuItems = document.querySelectorAll('#sidebar-menu a');
menuItems.forEach(function(menuItem) {
 menuItem.addEventListener('click', function() {
    var menu = document.getElementById('sidebar-menu');
    menu.classList.remove('showMenu');
    menu.classList.add('hidden');
 });
});