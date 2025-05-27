export function mainMainRow() {
    const mainRowDOM = document.getElementById('mainrow');

    mainRowDOM.innerHTML = `
        <div class="container pirmas col-12">
            <div class="col-4 main-row-kairys">
                <h1>We are increasing business success</h1>
            </div>
            <div class="col-7 m-1 main-row-desinys">
                
            </div>
        </div>
    `;

   
    const rowdesinysDOM = mainRowDOM.querySelector('.main-row-desinys');

   
    const maindata = [
        { title: '+6531', desc: 'Satisfied Clients' },
        { title: '+700', desc: 'Finished projects' },
        { title: '+120', desc: 'Skilled Experts' },
    ];

    
    let HTML = '';
    for (const item of maindata) {
        HTML += `
            <div class="col-3 m-1 kvadratas-main-row">
                <h1>${item.title}</h1>
                <h3>${item.desc}</h3>
            </div>
        `;
    }

    rowdesinysDOM.innerHTML = HTML;
}

  
