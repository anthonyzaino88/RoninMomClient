class BlogComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.fetchBlogData();
  }

  async fetchBlogData() {
    try {
      const response = await fetch('https://anthonyzaino88.github.io/RoninMomClient/data/blog.json');
      const data = await response.json();
      this.renderBlogs(data);
    } catch (error) {
      console.error('Failed to fetch blog data:', error);
      this.shadowRoot.innerHTML = `<p>Error loading blogs.</p>`;
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        body, html {
          margin: 0;
          padding: 0;
          height: 100%;
          overflow: auto;
        }
        .blog-container {
          padding: 20px;
          display: block;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          margin-bottom: 8rem;
          
        }
        .blogs {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 20px;
        }
        .blog {
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          text-align: center;
        }
        .blog img {
          max-width: 100%;
          border-radius: 5px;
        }
        .blog-title {
          font-size: 18px;
          font-weight: bold;
          margin-top: 10px;
        }
        .blog-date, .blog-author {
          font-size: 14px;
          color: gray;
        }
        .blog-content {
          margin-top: 10px;
          height: 60px; /* Fixed height to show a snippet */
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .read-more {
          display: inline-block;
          margin-top: 10px;
          padding: 10px 20px;
          background-color: #F4F1EA;
          color: #302A25;
          text-decoration: none;
          border-radius: 5px;
        }
      </style>
      <div class="blog-container">
        <div class="blogs"></div>
      </div>
    `;
  }

  renderBlogs(data) {
    const blogsContainer = this.shadowRoot.querySelector('.blogs');
    data.categories.forEach(category => {
      category.blogs.forEach(blog => {
        const blogElement = document.createElement('div');
        blogElement.classList.add('blog');
        let contentSnippet = 'No content available';
        
        if (blog.content && blog.content.length > 0) {
          const firstContentSection = blog.content[0];
          if (firstContentSection.contentBody) {
            contentSnippet = firstContentSection.contentBody.substring(0, 100) + '...';
          }
        }

        blogElement.innerHTML = `
          <img src="${blog.image || 'default-image.jpg'}" alt="${blog.title}">
          <div class="blog-title">${blog.title}</div>
          <div class="blog-date">Date: ${blog.dateWritten}</div>
          <div class="blog-author">Author: ${blog.author}</div>
          <div class="blog-content">${contentSnippet}</div>
          <a class="read-more" href="javascript:void(0);" data-id="${blog.id}">Read more</a>
        `;
        blogElement.querySelector('.read-more').addEventListener('click', () => this.showSingleBlog(blog.id));
        blogsContainer.appendChild(blogElement);
      });
    });
  }

  showSingleBlog(id) {
    const singleBlogComponent = document.querySelector('single-blog-component');
    const blogComponent = this.shadowRoot.querySelector('.blog-container');
    blogComponent.style.display = 'none';
    singleBlogComponent.style.display = 'block';
    singleBlogComponent.setBlogId(id);
  }
}

customElements.define('blog-component', BlogComponent);
