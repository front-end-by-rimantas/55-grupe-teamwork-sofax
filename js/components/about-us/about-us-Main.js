import { aboutUsMainData } from "../../data/about-us-MainData.js"

export function aboutUsMain(){

 let HTML=`
 <div class="container">
 <div class="row">
<div>
<h2>Our brand’s story an exciting journey</h2>
</div>
<div>
<p>Their journey was not without its challenges. They are faced countless to late nights brainstorming strategies.</p>
</div>
 
 
 </div>
 </div> 
 
 
 `




    document
    .getElementById('app')
    .insertAdjacentHTML('beforeend',HTML)
}