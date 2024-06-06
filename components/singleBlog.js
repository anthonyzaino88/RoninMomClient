class SingleBlogComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  setBlogId(id) {
    this.blogId = id;
    this.fetchBlogData();
  }

  async fetchBlogData() {
    try {
      const response = await fetch('https://anthonyzaino88.github.io/RoninMomClient/data/blog.json');
      const data = await response.json();
      const blog = data.categories.flatMap(category => category.blogs).find(blog => blog.id == this.blogId);
      if (blog) {
        this.renderBlog(blog);
      } else {
        this.shadowRoot.innerHTML = `<p>Blog not found.</p>`;
      }
    } catch (error) {
      console.error('Failed to fetch blog data:', error);
      this.shadowRoot.innerHTML = `<p>Error loading blog.</p>`;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        .blog {
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
        .blog-title {
          font-size: 24px;
          font-weight: bold;
        }
        .blog-date, .blog-author {
          font-size: 14px;
          color: gray;
        }
        .blog-content {
          margin-top: 20px;
        }
        .back-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #F4F1EA;
          color: #302A25;
          text-decoration: none;
          border-radius: 5px;
          cursor: pointer;
        }
      </style>
      <div class="blog"></div>
      <div class="back-button">Back to Blog List</div>
    `;
    this.shadowRoot.querySelector('.back-button').addEventListener('click', () => this.backToBlogList());
  }

  renderBlog(blog) {
    const container = this.shadowRoot.querySelector('.blog');
    container.innerHTML = `
      <div class="blog-title">${blog.title}</div>
      <div class="blog-date">Date: ${blog.dateWritten}</div>
      <div class="blog-author">Author: ${blog.author}</div>
      <div class="blog-content">${blog.content.map(section => `
        <h3>${section.contentTitle}</h3>
        <p>${section.contentBody}</p>
      `).join('')}</div>
    `;
  }

  backToBlogList() {
    const blogComponent = document.querySelector('blog-component').shadowRoot.querySelector('.blog-container');
    blogComponent.style.display = 'flex';
    this.style.display = 'none';
  }
}

customElements.define('single-blog-component', SingleBlogComponent);
