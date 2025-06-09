import { headerData } from "../data/headerData.js";

export function header() {

    let navbarHTML = ``;

    for (const item of headerData) {
        if (item.subMenu) {

            let subMenuHTML = '';

            for (const subItem of item.subMenu) {
                if (subItem.subMenu) {

                    let subSubMenuHTML = ``;

                    for (const subSubItem of subItem.subMenu) {
                        if (subSubItem) {
                            subSubMenuHTML += `<li><a href="${subSubItem.href}">${subSubItem.text}</a></li>`
                        }
                    }

                    subMenuHTML += `
                        <li class="sub-dropdown">
                            <a href="${subItem.href}">${subItem.text}<i class="fa fa-angle-right"></i></a>
                            <div class="sub-dropdown-list underline"><ul>${subSubMenuHTML}</ul></div>
                        </li>`;

                } else {
                    subMenuHTML += `<li class="sub-dropdown underline"><a href="${subItem.href}">${subItem.text}</a></li>`
                }
            };

            navbarHTML += `
            <div class="dropdown">
                <a href="${item.href}">${item.text}<i class="fa fa-angle-down"></i></a>
                <div class="dropdown-list"><i class="top-angle fa fa-caret-up"></i><ul>${subMenuHTML}</ul></div>
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