export function header() {
 
    const HTML = `
    <div class="container-header">
        <div class="row">
            <header class="col-12 headeris">
            <div>
            <a href = "#"><img class="logo" src="./img/SofaxLogo.webp" alt="" ></a>
            </div>
        <nav class="navbar">
            <a href="#">Demos</a>
            <a href="#">About Us</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
        </nav>
        <button class="pink"> Get started</button>

            </header>
        </div>
    </div>`;
 
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}