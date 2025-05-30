import {mainColumnOneData} from "../data/main-column-one-data.js";

export function mainColumnOne() {
 
 

let cardsHTML = '';

for (let i = 0; i < 6; i++)
    {
        const services = mainColumnOneData[i];
        cardsHTML += `
        <div class =" col-12 col-md-6 col-lg-4 col-xxl-4 Itservices-card">
            <div class="mco-picture">
                <img src="./img/MainColumnOne/${services.img}" alt="${services.imgAlt}">
            </div>
            <div class="mco-title">
                <h3>${services.title}</h3>
            </div>
            <div class="mco-desc">
                <p>${services.description}</p>
            </div>
            <div class="mco-readmore">
             <a href="#">Read more</a>
             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"></path></svg>
            </div>
        </div>`;
    }


 
 const HTML=`
    <div class="container bg-grey">
            <div class="mco-row1">
                    <h2 class=" col-12 col-lg-5 m-lg-4 weprovide">We provide IT and business solutions</h2>
                </div>
            <div class="mco-row2">${cardsHTML}</div>
    </div>`;
        
document
.getElementById('app')
.insertAdjacentHTML('beforeend', HTML);
}