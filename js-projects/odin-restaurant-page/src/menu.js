function createMenuPage() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    pageContent.appendChild(heading);

    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li');
    menuItem1.textContent = "Steak";
    const menuItem2 = document.createElement('li');
    menuItem2.textContent = "Fish";
    const menuItem3 = document.createElement('li');
    menuItem3.textContent = "Lamb";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    pageContent.appendChild(menuList);
    content.appendChild(pageContent);
}

export {createMenuPage}