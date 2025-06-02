export function footer() {
  const HTML = `
        <footer class="container">
      <div class="row">
        <div class="footer-top">
          <div class="footer-about col-12 col-xl-8">
            <h1>Let's embark on a IT services together!</h1>
            <img src="../img/shape1.png" alt="" />
          </div>
          <div class="arrow-up col-xl-1 m-xl-3">
            <a href="#">
              <i class="fa fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="socials col-lg-6 col-xl-4">
            <img src="../img/SofaxLogo.webp" alt="" />
            <p>Sofax has many plans for the future to work with great clients and continue to work with agencies.</p>
            <div class="social-links">
              <a href="#" class="fa fa-xing"></a>
              <a href="#" class="fa fa-facebook"></a>
              <a href="#" class="fa fa-instagram"></a>
              <a href="#" class="fa fa-linkedin"></a>
            </div>
          </div>
          <div class="company col-lg-4 col-xl-3">
            <p>Company</p>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact US</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms &amp; Conditions</a></li>
            </ul>
          </div>
          <div class="utility col-lg-4 col-xl-2">
            <p>Utility pages</p>
            <ul>
              <li><a href="#">Instructions</a></li>
              <li><a href="#">Style guide</a></li>
              <li><a href="#">404 Pages</a></li>
              <li><a href="#">Licenses</a></li>
            </ul>
          </div>
          <div class="subscribe col-lg-4 col-xl-3">
            <p>Subscribe to our newsletter</p>
            <form class="form">
              <input class="white" type="email" placeholder="Enter your email" name="email" id="email" maxlength="50" required />
              <button class="pink" type="submit">Subscribe now</button>
            </form>
          </div>
        </div>
        <div class="copy-right">
          <p>© 2025 Mthemeus All Rights Reserved.</p>
        </div>
      </div>
    </footer>`

  document

    .getElementById('app')

    .insertAdjacentHTML('beforeend', HTML);
}