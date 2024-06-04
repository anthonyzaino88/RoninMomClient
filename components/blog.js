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
            display: flex;
            justify-content: center;
          }
          .blogs {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1200px;
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
          }
          .read-more {
            display: inline-block;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #007BFF;
            color: #fff;
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
          blogElement.innerHTML = `
            <img src="${blog.image}" alt="${blog.title}">
            <div class="blog-title">${blog.title}</div>
            <div class="blog-date">Date: ${blog.dateWritten}</div>
            <div class="blog-author">Author: ${blog.author}</div>
            <div class="blog-content">${blog.content}</div>
            <a class="read-more" href="${blog.link}">Read more</a>
          `;
          blogsContainer.appendChild(blogElement);
        });
      });
    }
  }
  
  customElements.define('blog-component', BlogComponent);