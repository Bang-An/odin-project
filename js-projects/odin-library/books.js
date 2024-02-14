const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    render();
}

function rmBookFromLibrary(index){
    myLibrary.splice(index, 1);
    render();
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleReadWraper(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let lirary = document.querySelector("#library");
    lirary.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookCard = document.createElement("div");
        bookCard.setAttribute("class", "book-card");
        bookCard.innerHTML = 
        `
        <div class = "book-header">
            <h3 class = "book-title">${book.title} </h3>
            <h5 class = "book-author">${book.author} </h5>
        </div>
        <div class = "book-body">
            <p class = "book-pages">${book.pages} </p>
            <p class = "read-status">${book.read ? "READ" : "NOT READ YET"} </p>
            <button id = "rm-book-btn" onclick = "rmBookFromLibrary(${i})">Remove</button>
            <button id = "toggle-read-btn" onclick = "toggleReadWraper(${i})">Mark Read</button>
        </div>
        `;
        lirary.appendChild(bookCard);
    }
    
}

document.querySelector("#new-book-btn").addEventListener("click", ()=>{
    document.querySelector("form").style = "display: block";
})

document.querySelector("#submit").addEventListener("click", ()=>{
    event.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
})