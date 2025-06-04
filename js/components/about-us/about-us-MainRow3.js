import { mainRow3data } from "../../data/about-us-MainRow3data.js";

export function aboutUsMainRow3 () {
    let HTML1 = ''
    
    for (const item of mainRow3data) {
        HTML1+=`<div class="col-12 col-lg-6 forRow3Cards"><h4>${item}</h4> <i class="fa fa-chevron-down forChevron" aria-hidden="true"></i> </div>`
    };


    const HTML = `

        <div class="container containerBackground">
            <div class="row">
            <div class="col-xl-9 m-xl-1 col-xxl-8 m-xxl-2 aboutusrow3h1 forh2aboutus ">
            <h1>If you want to know anything asked us</h1>
            </div>
            <div>
            ${HTML1}
            </div>
            
            </div>
    
        </div >
    
    

    `



    document.getElementById('app').insertAdjacentHTML('beforeend', HTML);
}