import { headerData } from "../data/headerData.js";

export function header() {

    let navbarHTML = ``;

    for (const item of headerData) {
        if (item.subMenu) {

            let subMenuHTML = '';

            for (const subItem of item.subMenu) {
                subMenuHTML += `
                <a href="${subItem.href}">${subItem.text}</a>
            `;
            };

            navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="fa fa-caret-up top-angle"></i>${subMenuHTML}</div>
            </div>`;
        } else {
            navbarHTML += `<div class="dropdown"><a href="${item.href}">${item.text}</a></div>`;
        }
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