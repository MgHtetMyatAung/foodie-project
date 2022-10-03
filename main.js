import './style.scss';
import * as bootstrap from 'bootstrap';
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import 'waypoints/lib/noframework.waypoints';

let options = {
  strings: ['Food ...', 'Drink ...'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1500,
  loop: true
};

let typed = new Typed('.element', options);

let toDown = {
  distance: '50%',
  origin: 'top',
  duration: 700,
  interval: 300
};

ScrollReveal().reveal('.to-down', toDown);

let toRight = {
  distance: '50%',
  origin: 'left',
  duration: 700,
  interval: 300
};

ScrollReveal().reveal('.to-right', toRight);

let toLeft = {
  distance: '50%',
  origin: 'right',
  duration: 700,
  interval: 300
};

ScrollReveal().reveal('.to-left', toLeft);


new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
    let oldNavLink=document.querySelector(".nav-link.active");
    if(oldNavLink != null){
    oldNavLink.classList.remove("active");
    }
    let currentLink=document.querySelector(`[href="#home"]`);
    currentLink.classList.add("active");
  },
  offset: "5%"
})

let sections=['about','services','menus'];
sections.forEach(x=>{
    new Waypoint({
    element: document.getElementById(x),
    handler: function(direction) {
      let oldNavLink=document.querySelector(".nav-link.active");
      oldNavLink.classList.remove("active");
      let currentLink=document.querySelector(`[href="#${x}"]`);
      currentLink.classList.add("active");
    },
    offset: "50%"
  })
})

new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    let oldNavLink=document.querySelector(".nav-link.active");
    if(oldNavLink != null){
    oldNavLink.classList.remove("active");
    }
    let currentLink=document.querySelector(`[href="#contact"]`);
    currentLink.classList.add("active");
  },
  offset: "85%"
})


let menuLists=[
  {
    id: 1,
    img: "./img/plate1.png",
    title: "Barbecue Salad",
    description: "Special Delicious Dish",
    price: 32,
    currency: "$"
  },
  {
    id: 2,
    img: "./img/plate2.png",
    title: "Barbecue Salad",
    description: "Special Delicious Dish",
    price: 22.2,
    currency: "$"
  },
  {
    id: 3,
    img: "./img/plate3.png",
    title: "Barbecue Salad",
    description: "Special Delicious Dish",
    price: 50.8,
    currency: "$"
  },
  {
    id: 4,
    img: "./img/plate1.png",
    title: "Barbecue Salad",
    description: "Special Delicious Dish",
    price: 20.8,
    currency: "$"
  }
];

let menuRow=document.getElementById("menuRow");

menuLists.forEach(x=>{
  let div=document.createElement("div");
  div.classList.add("col-10",'col-lg-2','col-md-4');
  div.innerHTML= `
      <div class="card plate mb-5 mb-lg-0">
      <img src="${x.img}" alt="" class="w-75 mx-auto d-block my-4">
      <div class="card-body">
        <p class="fw-bold">${x.title}</p>
        <p class=" text-black-50 small">
          ${x.description}
        </p>
        <div class="d-flex justify-content-between align-items-center">
          <p class="mb-0">${x.currency} ${x.price}</p>
          <button class="btn btn-primary">
            <i class="bi bi-cart-plus text-white"></i>
          </button>
        </div>
        </div>
      </div>
  `;

  menuRow.append(div);
})

let toTop=document.getElementById("toTop");
toTop.addEventListener('click',()=>{
  window.scrollTo(0,0);
});

