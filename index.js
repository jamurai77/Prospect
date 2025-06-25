const booksDropdown = document.querySelector('.books-dropdown');
const miscDropdown = document.querySelector('.misc-dropdown');
const navList = document.querySelector('.nav-list');
const navItems = Array.from(navList.children);

console.log(navItems[1].style.width);
booksDropdown.style.width = navItems[1].style.width;
miscDropdown.style.width = navItems[2].width * 2;