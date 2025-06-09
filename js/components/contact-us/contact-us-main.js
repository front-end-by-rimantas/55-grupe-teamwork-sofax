
import { maindata } from "../../data/contactUsMainData.js"

export function contactUsMain() {
    let HTML1 = '';
    
    for (const item of maindata) {
        HTML1 += `
        <div class="contact-item">
            <img src="${item.imgInf}" alt="${item.altInf}">
            <h3>${item.title}</h3> <!-- Pataisyta: buvo item.title.Inf -->
            <p>${item.desc}</p>
        </div>`;
    }
    
    const HTML = `
    <div class="container">
        <div class="row">
            <div class="cuKairys">
                ${HTML1}
            </div>
            <div class="cuDesinys"> <!-- Pataisyta: trūko uždarančios kabutės -->
                <!-- Čia galite įdėti dešinės pusės turinį -->
            </div>
        </div>
    </div>`;

    document.getElementById('app').insertAdjacentHTML('beforeend',HTML)
}