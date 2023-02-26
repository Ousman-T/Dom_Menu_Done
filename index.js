// 1.0
const mainEl = document.querySelector('main');
// 1.1
mainEl.style.backgroundColor = 'var(--main-bg)'
// 1.2
mainEl.innerHTML = '<h1>SEI Rocks!</h1>'
console.log(mainEl);
// 1.3
mainEl.classList.add('flex-ctr');
console.log(mainEl);
// 2.0
topMenuEl = document.querySelector('#top-menu');
console.log(topMenuEl);
// 2.1
topMenuEl.style.height = '100%';
// 2.2
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
console.log(topMenuEl);
// 2.3
topMenuEl.classList.add = ('flex-around');
console.dir(topMenuEl);
// 3.0
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
  ];
  //   3.1
  menuLinks.forEach (obj => {
    const a = document.createElement('a');
    a.setAttribute('href', obj.href);
    a.textContent = obj.text;
    topMenuEl.append(a);
    console.log(a);
  })
  
  console.log(menuLinks);

//   4.0
subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

// 4.1
subMenuEl.style.height = "100%";
console.dir(subMenuEl);

// 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4.3

subMenuEl.classList.add = ('flex-around');
console.dir(subMenuEl);

// 4.4
subMenuEl.style.position = ("absolute");

// 4.5
subMenuEl.style.top = ("0");
console.dir(subMenuEl);

// 5.1
topMenuLinks = document.getElementById("top-menu").querySelectorAll('a');
console.log(topMenuLinks);
showingSubMenu = false;
console.dir(topMenuLinks)
// 5.6
function checkSubLinks(menuName){
    for(let i = 0; i < menuLinks.length; i++){
        elemnt= menuLinks[i]
        if(elemnt.text == menuName){
            console.log("equal");
            if('subLinks' in elemnt){
                return true;    }
                return false;
        }
    }
}

// 5.2  5.3 5.4 5.5
topMenuEl.addEventListener("click", function(event){
    event.preventDefault();
    console.log(event.target);
    if(event.target.tagName.toLowerCase() !== 'a'){
        console.log("no a");
        return;
    } 
    event.target.classList.add('active');
    if(event.target.classList.contains('active')){
        console.log(event.target);
        event.target.classList.remove('active');
        showingSubMenu = false;
        subMenuEl.style.top = '0';
        topMenuEl.classList.remove('active');
        
        link = event.target;
        console.log("Testing function");
        showingSubMenu = checkSubLinks(link.textContent);
        console.log(showingSubMenu);
        if(showingSubMenu == true){
            buildSubMenu(link.textContent);
        }    
            
        if(link.textContent == 'about'){
            mainEl.getElementsByTagName('h1')[0].innerText= link.textContent;
        }
        return;
    }
});
// 5.6 5.7 5.8 
function buildSubMenu(menuName){
       subMenuEl.innerHTML = '';
    for (let i = 0; i < menuLinks.length; i++){
        if(menuName == menuLinks[i].text)
        menuLinks[i].subLinks.forEach (obj => {
            const a = document.createElement('a');
            a.setAttribute('href', obj.href);
            a.textContent = obj.text;
            subMenuEl.append(a);
            console.log(a);
          })
    }
subMenuEl.style.top = ("100%");
}

// 6.0

subMenuEl.addEventListener('click', function(event){
    event.preventDefault();
    if(event.target.tagName.toLowerCase() !== 'a'){
        return;
    }
    console.log(event.target.tagName);
    // 6.1
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    // 6.2
    topMenuLinks.forEach(link => {
        link.classList.remove('active');
    })
    // 6.3

    mainEl.getElementsByTagName('h1')[0].innerText= event.target.textContent;
});
