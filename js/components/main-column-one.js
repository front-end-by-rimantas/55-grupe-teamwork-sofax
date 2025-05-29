export function mainColumnOne() {
 
 
const data = [
    {
        imgSrc: 'hero-footer1.png',
        imgAlt: 'Hero-footer_pic1',
        title: 'Software Development',
        desc: 'Define to the project scope, objectives, and feasibility. Conduct risk analysis and allocate resources.'
    },

    {
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic2',
        title: 'Technology Advisory',
        desc: 'Development implementation supports risk management and staying ahead of technological trends.',
    },

    {
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic3',
        title: 'Analytics & Research',
        desc: 'Investigating why a certain event trend or occurred.Identifying patterns and anomalies in data research.',
    },

 
];

const data2 =
[
     {
        imgSrc: 'hero-footer1.png',
        imgAlt: 'Hero-footer_pic1',
        title: 'IT Strategy & Planning',
        desc: 'IT strategy and planning it effectively is essential for aligning technology with a business goals.'
    },

    {
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic2',
        title: 'SEO & Optimazation',
        desc: 'Google Analytics, Ahrefs, SEMrush, a Moz for keyword research, backlink analysis performance tracking.',
    },

    {
        imgSrc: 'hero-footer2.png',
        imgAlt: 'Hero-footer_pic3',
        title: 'Network Management',
        desc: 'This includes wide range tasks such as monitoring network performance, troubleshooting issues.',
    },
];

let HTML1 = '';
for (const item of data) {
    HTML1 += `
         
            <div class="col-12 col-lg-4  kvadratas">
 
                <div class="kvadrato-pic">
                <img src="./img/${item.imgSrc}" alt="${item.imgAlt}" >
                </div>
 
                <div class="kvadrato-desine">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <a href="#">Read More</a>
                </div>
 
           </div>`
 
           
};

let HTML2 = '';
for (const item of data2) {
    HTML2 += `
         
            <div class="col-12 col-lg-4  kvadratas">
 
                <div class="kvadrato-pic">
                <img src="./img/${item.imgSrc}" alt="${item.imgAlt}" >
                </div>
 
                <div class="kvadrato-desine">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
                <a href="#">Read More</a>
                </div>
 
           </div>`
 
           
};
 
 const HTML=`
    <div class="container main1">
        <div class="upperItRow">
          <h1 class="weprovide">We provide IT and business solutions</h1>  
        </div>
   
   <div class="row lowerItRow1">
    <div>
    <div class="cards">
    sadsdasdasd
        ${HTML1}
    </div> 
    </div>
   </div>

   <div class="row lowerItRow2">
   <div>
    <div class="cards">
    asdasdasjjjjjj
        ${HTML2}
        </div>
    </div>
   </div>
   </div>`

        
document
.getElementById('app')
.insertAdjacentHTML('beforeend', HTML);
}