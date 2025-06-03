export function aboutUsHeader () {

    const HTML = `
    <div class=" container-header container">
        <div class="row">
            <header class="col-12 headeris">
            <div>
            <a href = "#"><img class="logo" src="../../../img/SofaxLogo.webp" alt="logo" ></a>
            </div>
        <nav class="navbar">
            <a href="#">Demos</a>
            <a href="#">About Us</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
        </nav>
        <button class="pink baltas none480px"> Get started</button>

            </header>
            
        </div>
    </div>
    <div class="col-12 forh1">
            <h1>About Us</h1>
            <div class="forHome">
            <a href="#">Home</a>
            <i class="fa fa-chevron-right" aria-hidden="true"></i>
            <a href="#" >About Us</a>
            </div>
            </div>`;
 
    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}