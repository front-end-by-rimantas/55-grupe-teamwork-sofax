import { headerData } from "../data/headerData.js";

export function header() {

    let navbarHTML = ``;

    for (const item of headerData) {
        navbarHTML += `<a href="${item.href}">${item.text}</a>`;
    }

    const HTML = `
    <div class="container-header">
        <div class="row">
            <header class="col-12 headeris">
            <div>
            <a href = "#"><img class="logo" src="./img/SofaxLogo.webp" alt="logo" ></a>
            </div>
        <nav class="navbar">
            <div class="main-navbar">
                ${navbarHTML}
            </div>
        </nav>
        <button class="pink baltas none480px"> Get started</button>

            </header>
        </div>
    </div>`;

    document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}