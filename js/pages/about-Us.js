import { header } from "../components/header.js";
header();

let HTML = `<div class="container seniukas">
<div class="row">


</div>

</div>`



document
.getElementById('app')
.insertAdjacentHTML('afterbegin', HTML);

