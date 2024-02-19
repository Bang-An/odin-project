function initLoadFunction() {
    var contentSection = document.getElementById('content');
    contentSection.innerHTML = "";
    var content = document.createElement("h1");
    content.textContent = "This is a good restaurant"; // Corrected from content.textcontent
    contentSection.appendChild(content);
}

export { initLoadFunction };