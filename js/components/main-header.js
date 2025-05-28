export function mainHeader() {

    const HTML = `
    <main class="container">
        <div class="row">
          <div class="main-header">
            <div class="main-header-image col-12 col-lg-6">
              <img src="./img/image2v8.png" alt="" />
            </div>
            <div class="main-header-text col-12 col-lg-6">
              <div class="text-about">
                <h1>Strive offer intelling business solutions</h1>
                <p>Technologies & data-driven strategies help organizations achieve their goals optimize operations & maintain a competitive edge in the market.</p>
              </div>
              <div class="features">
                <div class="feature-column">
                  <div class="feature-image">
                    <img src="./img/icon1v8.png" alt="" />
                  </div>
                  <div class="feature-content">
                    <h2>Best Services</h2>
                    <p>Thorough problemsolving to prevent recurrence.</p>
                  </div>
                </div>
                <div class="feature-column">
                  <div class="feature-image">
                    <img src="./img/icon2v8.png" alt="" />
                  </div>
                  <div class="feature-content">
                    <h2>24/7 Call Support</h2>
                    <p>Our teams available to 24 hours and 7 days a week.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>`;

    document

        .getElementById('app')

        .insertAdjacentHTML('beforeend', HTML);

}
