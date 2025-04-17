document.addEventListener("DOMContentLoaded", function () {
    // Set up basic styles via JavaScript
    const style = document.createElement("style");
    style.innerHTML = `
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }
      .container {
        width: 90%;
        margin: 0 auto;
      }
      header {
        background-color: #003366;
        color: white;
        padding: 20px 0;
        text-align: center;
      }
      header nav ul {
        list-style: none;
        padding: 0;
      }
      header nav ul li {
        display: inline;
        margin-right: 20px;
      }
      header nav ul li a {
        color: white;
        text-decoration: none;
        font-size: 18px;
      }
      footer {
        background-color: #003366;
        color: white;
        padding: 10px 0;
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
      }
      main {
        padding: 40px 0;
        min-height: 80vh;
      }
      h1, h2, h3 {
        margin-bottom: 20px;
      }
      .projects ul {
        padding-left: 20px;
      }
      .projects ul li {
        margin-bottom: 10px;
      }
      .card {
        background-color: white;
        padding: 20px;
        margin: 10px 0;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .button {
        padding: 10px 20px;
        background-color: #003366;
        color: white;
        text-decoration: none;
        border-radius: 5px;
        font-weight: bold;
      }
      .button:hover {
        background-color: #002244;
      }
    `;
    document.head.appendChild(style);
  
    // Header HTML
    const header = `
      <header>
        <div class="container">
          <h1>PAK Construction</h1>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="project.html">Projects</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="ecommerce.html">Ecommerce</a></li>
              <li><a href="company-profile.html">Company Profile</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  
    // Footer HTML
    const footer = `
      <footer>
        <p>&copy; 2025 PAK Construction. All rights reserved.</p>
      </footer>
    `;
  
    // Page content for different pages
    const pageContent = {
      home: `
        <main>
          <div class="container">
            <h2>Welcome to PAK Construction</h2>
            <p>We are a leading construction company in Pakistan, specializing in residential and commercial projects. Our mission is to deliver top-notch infrastructure and build quality that lasts a lifetime.</p>
            <img src="https://ddc.net.pk/wp-content/uploads/2021/07/home-buildings-services-construction-banner-construction-slider-background-construction-companies-in-lahore-1024x563.jpg" alt="Construction" style="width: 100%; border-radius: 8px;">
          </div>
        </main>
      `,
      project: `
        <main>
          <div class="container projects">
            <h2>Our Recent Projects</h2>
            <ul>
              <li>🏢 Bahria Town Villas - Islamabad</li>
              <li>🏗 Commercial Plaza - Lahore</li>
              <li>🏠 Residential Apartments - Karachi</li>
              <li>🛣 Motorway Expansion Project</li>
            </ul>
          </div>
        </main>
      `,
      contact: `
        <main>
          <div class="container">
            <h2>Contact Us</h2>
            <form>
              <div class="card">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 5px;">
              </div>
              <div class="card">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 5px;">
              </div>
              <div class="card">
                <label for="message">Message:</label>
                <textarea id="message" name="message" required style="width: 100%; padding: 10px; margin-bottom: 20px; border-radius: 5px;"></textarea>
              </div>
              <div>
                <button type="submit" class="button">Send Message</button>
              </div>
            </form>
          </div>
        </main>
      `,
      ecommerce: `
        <main>
          <div class="container">
            <h2>Shop Construction Materials</h2>
            <div class="card">
              <h3>Cement</h3>
              <p>Price: Rs. 1200</p>
              <button class="button">Add to Cart</button>
            </div>
            <div class="card">
              <h3>Bricks</h3>
              <p>Price: Rs. 15 each</p>
              <button class="button">Add to Cart</button>
            </div>
            <div class="card">
              <h3>Steel Rods</h3>
              <p>Price: Rs. 250/kg</p>
              <button class="button">Add to Cart</button>
            </div>
          </div>
        </main>
      `,
      company_Profile: `
        <main>
          <div class="container">
            <h2>About PAK Construction</h2>
            <p>PAK Construction was founded in 2002. We have successfully completed numerous high-end commercial and residential projects across Pakistan. Our mission is to provide quality services with the highest standards in construction and development.</p>
            <h3>Our Vision</h3>
            <p>To become Pakistan's top construction company known for its innovation, excellence, and quality-driven approach.</p>
          </div>
        </main>
      `
    };
  
    // Determine the current page and set the content
    let page = window.location.pathname.split("/").pop().split(".")[0]; // Get page name from URL
    page = page || 'home'; // Default to 'home' if no page is specified
  
    // Insert the header, content, and footer
    document.body.innerHTML = header + (pageContent[page] || pageContent['home']) + footer;
  });