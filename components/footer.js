
class FooterComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.render();
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          .footer {
            background-color: #F4F1EA; /* Cream color like in the header */
            padding: 20px 10px;
            text-align: center;
            color: #302A25; /* Text color */
            font-family: 'Hightower Text', serif; /* Consistent font */
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
            width: 24px; /* Adjust based on your icon size */
            height: 24px;
          }
  
          .copyright {
            margin-top: 10px;
            font-size: 14px;
          }
        </style>
  
        <div class="footer">
          <div class="social-links">
            <!-- Adjust the paths to your icons as needed -->
            <a href="https://facebook.com" target="_blank"><img src="./assets/img/facebook.svg" alt="Facebook"></a>
            <a href="https://instagram.com" target="_blank"><img src="./assets/img/instagram.svg" alt="Instagram"></a>
            <a href="https://tiktok.com" target="_blank"><img src="./assets/img/tiktok.svg" alt="TikTok"></a>
          </div>
          <div class="copyright">
            &copy; 2024 Ronin Mom. All rights reserved.
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('footer-component', FooterComponent);
  