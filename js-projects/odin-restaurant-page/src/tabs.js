import { createRestaurant } from "./restaurant";
import { createMenuPage } from "./menu";
import { createContact } from "./contact";

function createTabs(){
    // 3 buttons 
    const homeBtn = document.querySelector("#home-btn");
    const menuBtn = document.querySelector("#menu-btn");
    const contactBtn = document.querySelector("#contact-btn");
    // Add evenListener for each button 
    homeBtn.addEventListener('click', () => {
        clearContent();
        createRestaurant();
    })

    menuBtn.addEventListener('click', () => {
        clearContent();
        createMenuPage();
    })

    contactBtn.addEventListener('click', () => {
        clearContent();
        createContact();
    })
}

function clearContent(){
    const content = document.querySelector("#content");
    const pageContent = document.querySelector(".page-content");
    if(pageContent){
        content.removeChild(pageContent);
    }
}

export{createTabs};