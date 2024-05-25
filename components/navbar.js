class RoninNavbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Enable encapsulated style and markup
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
            nav {
               
                width: 100%;
                position: fixed;
                top: 0;
                display: flex;
                justify-content: space-between;
                align-items: center;
                background-color: #302A25; /* Default color */
                z-index: 1000; /* Ensure navbar is always on top */
            }

            a {
                color: whitesmoke;
                text-decoration: none;
                margin: 0 20px;
                transition: color 0.3s;
            }

            nav.scrolled a {
                color: #302A25; /* Text color change on scroll */
            }

            .logo {
                height: 50px; 
                color: white;
                font-size: 2rem;
       
            }

        </style>
        <nav>
            <div class="logo"><a href="/">RM</a></div>
            <div class="links">
                <a href="./pages/about.html">About</a>
                <a href="./pages/blog.html">Blog</a>
                <a href="./pages/shop.html">Shop</a>
            </div>
        </nav>
        `;
    }
}

customElements.define('ronin-navbar', RoninNavbar);
