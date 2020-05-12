
let navBarLinks = [
    {name: 'Home' , url : '/index.html'},
    {name: 'Shop' , url : '/Shop.html'},
    {name: 'Contacts' , url: '/Contacts.html'},
]

let navItems = document.createElement('ul');


for(let i = 0 ; i < navBarLinks.length ; i++){
    let linkItem = navBarLinks[i];
    let navLi=document.createElement('li');
    navLi.innerHTML= '<a  href="' + linkItem.url +' ">' + linkItem.name +'</a>'
   navItems.appendChild(navLi);

    navItems.innerHTML += navLi.type;
  
}

nav.appendChild(navItems)
