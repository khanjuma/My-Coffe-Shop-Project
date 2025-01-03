// chat GPT

//  let search = document.querySelector('.search-box');
//  let searchIcon = document.querySelector('#search-icon');
 
//  searchIcon.onclick = () => {
//      search.classList.toggle('active');
//      let isActive = search.classList.contains('active');
//      searchIcon.setAttribute('aria-expanded', isActive);
//  };
 



 let search = document.querySelector('.search-box');

 document.querySelector('#search-icon').onclick = () =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');

 };

 window.onscroll = () =>{
   navbar.classList.remove('active');
   search.classList.remove('active');
 }


 let navbar = document.querySelector('.navbar');

 document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active');
    search.classList.remove('active');

 };


 let header = document.querySelector('header');

 window.addEventListener('scroll') , () =>{
   header.classList.toggle('shadow', window.scrollY > 0);

 }