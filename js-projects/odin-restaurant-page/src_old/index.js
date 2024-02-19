import { initLoadFunction } from "./mainPage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";

initLoadFunction();


let homeBtn = document.getElementById('home-btn');
let menuBtn = document.getElementById('menu-btn');
let aboutBtn = document.getElementById('about-btn');

homeBtn.addEventListener('click', ()=>{
    initLoadFunction();
})

menuBtn.addEventListener('click', menuPage);

aboutBtn.addEventListener('click', aboutPage);