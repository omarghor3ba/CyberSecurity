document.addEventListener('DOMContentLoaded', function () {
    const menuItem = document.querySelector('.menu-item');
    const megaMenu = document.querySelector('.mega-menu');
    const links = megaMenu.querySelectorAll('a');
  
    // مستمع النقر لفتح أو غلق الـ mega-menu عند النقر على menu-item
    menuItem.addEventListener('click', function (e) {
      e.preventDefault();  // لمنع الرابط من العمل
      
      // إذا كان الـ mega-menu مفتوحًا، يتم غلقه
      if (menuItem.classList.contains('active')) {
        menuItem.classList.remove('active');
      } else {
        // فتح الـ mega-menu
        menuItem.classList.add('active');
      }
    });
  
    // مستمع للنقر في أي مكان آخر على الصفحة لإغلاق الـ mega-menu
    document.addEventListener('click', function (e) {
      // إذا كان النقر في مكان غير الـ menu-item أو الـ mega-menu، نقوم بإغلاقها
      if (!menuItem.contains(e.target) && !megaMenu.contains(e.target)) {
        menuItem.classList.remove('active');
      }
    });
  
    // مستمع النقر على الروابط داخل الـ mega-menu
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        // منع إغلاق الـ mega-menu عند النقر على الرابط
        e.stopPropagation();
      });
    });
  });
  