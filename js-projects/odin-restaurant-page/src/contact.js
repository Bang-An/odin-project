function createContact() {
    const content = document.querySelector("#content");
    const pageContent = document.createElement("div");
    pageContent.classList.add('page-content');
    pageContent.textContent = "call me at 999-999-9999";
    content.appendChild(pageContent);
}

export {createContact}