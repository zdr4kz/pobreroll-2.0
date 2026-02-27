import "./footer.css";

export default function Footer(){
    return(<>
    
        <footer className="footer-wrap bg-dark">
        <div className="footer-inner">
          <span className="footer-brand">Lumos</span>

        {/*   <ul className="footer-nav">
            {links.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul> */}

          <div className="footer-divider" />

          <p className="footer-copy">© 2025 Company, Inc. — All rights reserved.</p>
        </div>
      </footer>
    
    </>)
}