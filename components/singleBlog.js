class SingleBlogComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
    }
  
    connectedCallback() {
      this.render();
      this.fetchBlogData();
    }
  
    async fetchBlogData() {
      const urlParams = new URLSearchParams(window.location.search);
      const blogId = urlParams.get('id');
  
      try {
        const response = await fetch('./blogData.json');
        const data = await response.json();
        const blog = this.findBlogById(data, blogId);
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
  
    findBlogById(data, id) {
      for (const category of data.categories) {
        for (const blog of category.blogs) {
          if (blog.id == id) {
            return blog;
          }
        }
      }
      return null;
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
        </style>
        <div class="blog"></div>
      `;
    }
  
    renderBlog(blog) {
      const container = this.shadowRoot.querySelector('.blog');
      container.innerHTML = `
        <div class="blog-title">${blog.title}</div>
        <div class="blog-date">Date: ${blog.dateWritten}</div>
        <div class="blog-author">Author: ${blog.author}</div>
        <div class="blog-content">${blog.content}</div>
      `;
    }
  }
  
  customElements.define('single-blog-component', SingleBlogComponent);
  