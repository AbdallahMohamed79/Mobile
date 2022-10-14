let img = document.querySelector('.img')
let hero = document.querySelector('.hero')
let h1 = document.querySelector('.h1')
let h3 = document.querySelector('.phone h3')
let p = document.querySelector('.hero-p')
function phones(phone){
    img.src = phone;
}
function colors(color){
    hero.style.background = color;
}
function col(col){
    h1.style.color = col;
}
function colo(colo){
    p.style.color = colo;
}


document.querySelector('.fa-bars').addEventListener("click", () =>{
    document.querySelector(".nav-items").classList.toggle("active");
    
});
