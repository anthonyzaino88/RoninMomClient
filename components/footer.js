class FooterComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  connectedCallback() {
    // No need for observer logic here
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background-color: #F4F1EA;
          padding: 20px 10px;
          text-align: center;
          color: #302A25;
          font-family: 'Hightower Text', serif;
          width: 100%;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .footer.hidden {
          opacity: 0;
        }

        .social-links {
          margin: 10px 0;
        }

        .social-links a {
          margin: 0 5px;
          color: #302A25; /* Icon color */
          text-decoration: none;
        }

        .social-links img {
          width: 32px;
          height: 32px;
        }

        .copyright {
          margin-top: 10px;
          font-size: 14px;
        }

        .footer.visible {
          opacity: 1;
        }

        .footer:not(.visible) {
          opacity: 0;
        }
      </style>

      <div class="footer visible">
        <div class="social-links">
          <a href="https://facebook.com" target="_blank"><img src="https://anthonyzaino88.github.io/RoninMomClient/assets/img/facebook.svg" alt="Facebook"></a>
          <a href="https://instagram.com" target="_blank"><img src="https://anthonyzaino88.github.io/RoninMomClient/assets/img/instagram.svg" alt="Instagram"></a>
          <a href="https://tiktok.com" target="_blank"><img src="https://anthonyzaino88.github.io/RoninMomClient/assets/img/tiktok.svg" alt="TikTok"></a>
        </div>
        <div class="copyright">
          &copy; 2024 Ronin Mom. All rights reserved.
        </div>
      </div>
    `;
  }
}

customElements.define('footer-component', FooterComponent);

