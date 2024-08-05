class SingleBlogComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.checkUrlForBlogId();
  }

  checkUrlForBlogId() {
    const urlParams = new URLSearchParams(window.location.search);
    const blogId = urlParams.get('id');
    if (blogId) {
      this.setBlogId(blogId);
    }
  }

  setBlogId(id) {
    this.blogId = id;
    this.fetchBlogData();
  }

  async fetchBlogData() {
    try {
      const response = await fetch("https://roninmom.com/data/blog.json");
      const data = await response.json();
      const blog = data.categories
        .flatMap((category) => category.blogs)
        .find((blog) => blog.id == this.blogId);
      if (blog) {
        this.renderBlog(blog);
      } else {
        this.shadowRoot.innerHTML = `<p>Blog not found.</p>`;
      }
    } catch (error) {
      console.error("Failed to fetch blog data:", error);
      this.shadowRoot.innerHTML = `<p>Error loading blog.</p>`;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 800px;
          margin: auto;
          padding: 20px;
          font-family: Arial, sans-serif;
        }
        .blog {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .blog-header {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .blog-header img {
          max-width: 150px;
          max-height: 150px;
          margin-right: 20px;
          border-radius: 5px;
        }
        .blog-title {
          font-size: 28px;
          font-weight: bold;
        }
        .blog-date, .blog-author {
          font-size: 14px;
          color: gray;
          margin-bottom: 10px;
        }
        .blog-content {
          margin-top: 20px;
          line-height: 1.6;
        }
        .blog-content h3 {
          font-size: 22px;
          font-weight: bold;
          margin-top: 20px;
        }
        .blog-content p {
          margin-bottom: 20px;
        }
        .blog-content img {
          max-width: 100%;
          margin-top: 20px;
          margin-bottom: 20px;
        }
        .back-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #302A25;
          color: whitesmoke;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <div class="blog">
        <div class="blog-header">
          <img id="blog-image" src="" alt="Blog Image">
          <div>
            <div class="blog-title"></div>
            <div class="blog-date"></div>
            <div class="blog-author"></div>
          </div>
        </div>
        <div class="blog-content"></div>
      </div>
      <div class="back-button">Back to Blog List</div>
    `;
    this.shadowRoot
      .querySelector(".back-button")
      .addEventListener("click", () => this.backToBlogList());
  }

  renderBlog(blog) {
    const imageElement = this.shadowRoot.querySelector("#blog-image");
    const titleElement = this.shadowRoot.querySelector(".blog-title");
    const dateElement = this.shadowRoot.querySelector(".blog-date");
    const authorElement = this.shadowRoot.querySelector(".blog-author");
    const contentElement = this.shadowRoot.querySelector(".blog-content");

    if (blog.image) {
      imageElement.src = blog.image;
      imageElement.style.display = "block";
    } else {
      imageElement.style.display = "none";
    }

    titleElement.textContent = blog.title;
    dateElement.textContent = `Date: ${blog.dateWritten}`;
    authorElement.textContent = `Author: ${blog.author}`;

    contentElement.innerHTML = `
      ${blog.content
        .map(
          (section) => `
        ${section.contentTitle ? `<h3>${section.contentTitle}</h3>` : ""}
        <p>${section.contentBody}</p>
      `
        )
        .join("")}
      ${
        blog.images
          ? blog.images
              .map((image) => `<img src="${image}" alt="Blog Image">`)
              .join("")
          : ""
      }
    `;
  }

  backToBlogList() {
    const blogComponent = document
      .querySelector("blog-component")
      .shadowRoot.querySelector(".blog-container");
    blogComponent.style.display = "block";
    this.style.display = "none";
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.pushState(null, "", `blog.html`);
  }
}

customElements.define("single-blog-component", SingleBlogComponent);
