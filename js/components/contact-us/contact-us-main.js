
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
            <div class="col-12 col-lg-6 cuKairys">
                ${HTML1}
            </div>
            <div class="col-12 col-lg-6 cuDesinys"> 
            <h2>Send us a message</h2>
            <div>
            <label for="name">Your name</label>
            <input type="text" id="name" name="name" placeholder="Your name"></input>
            <label for="email">Your email</label>
            <input type="email" id="email" name="name" placeholder="Email Address"></input>
            <div>
            <label for="message">Your message:</label>
            <textarea id="message" name="message" rows="4" cols="50" placeholder="Write your comment"></textarea>
            </div>
            <label>
            <input type="checkbox" name="option1"> Save my name, email, & website in this browser for the next time I comment.</label>
    
            <button class="pink">Post Comment</button>
            </div>


            </div>
        </div>
    </div>`;

    document.getElementById('app').insertAdjacentHTML('beforeend', HTML)

}
