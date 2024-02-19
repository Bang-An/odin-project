function createRestaurant(){
    let content = document.querySelector('#content');
    let pageContent = document.createElement('div');
    pageContent.classList.add('page-content');

    let img = document.createElement('img');
    img.src = "/Users/allen/Documents/git/odin-project/js-projects/odin-restaurant-page/imgs/restaurant.avif"
    img.height = '300';
    pageContent.appendChild(img);

    let headLine = document.createElement("h1");
    headLine.textContent = "Welcome to my restaurant";
    pageContent.appendChild(headLine);

    let intro = document.createElement('p');
    intro.textContent = "Here we serve Asian food";
    pageContent.appendChild(intro);

    content.appendChild(pageContent);
}
export {createRestaurant}; 