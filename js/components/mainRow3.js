export function mainRow3(){

    const data=[
        {alt:"Picture_1",
        pic:'Main_row_1.png',
        title:'Essential',
        h1:'$39',
        title2:'Key features:',
        p1:'Lead, deal, contact, calendar and pipeline management',
        p2:'Seamless data import and 400+ integrations',
        p3:'24/7, multi-language support',
        class:'white',
        }
        ,
        {alt:"Picture_2",
        pic:'Main_row_2.png',
        title:'Essential',
        h1:'$69',
        title2:'Key features:',
        p1:'Full email sync with templates, open, click tracking & emailing',
        p2:'Automations builder, including email sequences',
        p3:'Meeting, email and video call',
        class:'pink baltas',

        },
            {alt:"Picture_2",
        pic:'Main_row_3.png',
        title:'Essential',
        h1:'$199',
        title2:'Key features:',
        p1:'Streamlined lead routing and account access control',
        p2:'Document and contract management with e-signatures',
        p3:'Revenue forecasts & reporting',
        class:'white',

        }
    ]

    let HTML1='';
    for(const item of data){
        HTML1+=`
        <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4  konturas">
        <img src="./img/${item.pic}" alt="${item.alt}">
        <h5>${item.title}</h5>
        <h1>${item.h1}</h1>
        <h6>${item.title2}</h6>
        <p><i class="fa fa-check-circle" aria-hidden="true"></i>${item.p1}</p>
        <p><i class="fa fa-check-circle" aria-hidden="true"></i>${item.p2}</p>
        <p><i class="fa fa-check-circle" aria-hidden="true"></i>${item.p3}</p>
        <button type="button" class="${item.class} mygtukas plociui">Purchase now</button>
        
        </div>
        `
    }




const HTML=`<div class="container mainRow3-senelis">
<div class="row">

<div class="col-12 mainRow-h1" >
<h1>Discover the right price plan for you </h1>
<button class="pink perdarymui baltas">Year/Month</button>
</div>

${HTML1}
</div>
</div>`

    document
    .getElementById('app')
    .insertAdjacentHTML('beforeend',HTML);
}