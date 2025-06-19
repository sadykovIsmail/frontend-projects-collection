// index.jsx
// Define the Footer component:
export default function App  () {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>About Us</h4>
        <ul>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/team">Team</a></li>
          <li><a href="/careers">Careers</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Resources</h4>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/help-center">Help Center</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section">
        <h4>Legal</h4>
        <ul>
          <li><a href="/terms">Terms of Service</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/cookies">Cookie Policy</a></li>
        </ul>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
        <div className="social-links">
          <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
          <a href="https://twitter.com" aria-label="Twitter">Twitter</a>
          <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

// Mount the component into the DOM
