export function mainMainrow(){

const data=[
{title:'6531+',
desc:'Satisfied Clients'
},
{title:'700+',
desc:'Finished Projects'
},
{title:'120+',
desc:'Skilled Experts'
}];

let HTML1='';

for (const item of data){
    HTML1+=`

    <div class="col-12 col-sm-4 col-lg-3 vaikas">
    <h1>${item.title}</h1>
    <h2>${item.desc}</h2>
    </div>
`
}

const HTML=`<div class="container senelis"> <div class="row tevas"><div class="col-12 col-lg-3 "><h1>We are increasing
business success</h1></div>${HTML1} </div></div>`


     document
        .getElementById('app')
        .insertAdjacentHTML('beforeend', HTML);
}