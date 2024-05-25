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
          .blog-container {
            padding: 20px;
          }
          .category {
            margin-bottom: 20px;
          }
          .blog {
            border: 1px solid #ccc;
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 5px;
          }
          .blog-title {
            font-size: 18px;
            font-weight: bold;
          }
          .blog-date, .blog-author {
            font-size: 14px;
            color: gray;
          }
          .blog-content {
            margin-top: 10px;
          }
        </style>
        <div class="blog-container"></div>
      `;
    }
  
    renderBlogs(data) {
      const container = this.shadowRoot.querySelector('.blog-container');
      data.categories.forEach(category => {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');
        categoryElement.innerHTML = `<h2>${category.name}</h2>`;
        
        category.blogs.forEach(blog => {
          const blogElement = document.createElement('div');
          blogElement.classList.add('blog');
          blogElement.innerHTML = `
            <div class="blog-title">${blog.title}</div>
            <div class="blog-date">Date: ${blog.dateWritten}</div>
            <div class="blog-author">Author: ${blog.author}</div>
            <div class="blog-content">${blog.content}</div>
            <a href="${blog.link}" target="_blank">Read more</a>
          `;
          categoryElement.appendChild(blogElement);
        });
  
        container.appendChild(categoryElement);
      });
    }
  }
  
  customElements.define('blog-component', BlogComponent);
  