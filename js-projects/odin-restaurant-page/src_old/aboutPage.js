function aboutPage(){
    let contentSection = document.getElementById('content');
    contentSection.innerHTML = "";
    let content = document.createElement('div');
    content.innerHTML = `
    <h1> THIS IS THE ABOUT PAGE </h1>
    `
    contentSection.appendChild(content)
}
export {aboutPage};