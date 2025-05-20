export default class NotFoundPage {
  async render() {
    return `
      <section class="not-found-container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="#/" class="home-link">Back to Home</a>
      </section>
    `;
  }

  async afterRender() {
    // Tambahkan event listener jika diperlukan
    document.querySelector('.home-link').addEventListener('click', () => {
      window.location.hash = '#/';
    });
  }
}