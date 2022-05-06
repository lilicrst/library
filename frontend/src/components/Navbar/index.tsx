import { ReactComponent as GithubIcon } from "assets/img/github.svg";
import "./styles.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="urlibrary-nav-content">
          <h1>UR Library</h1>
          
          <a
            href="https://github.com/lilicrst/library"
            target="_blank"
            rel="noreferrer"
          >
            <div className="urlibrary-contact-container">
              <GithubIcon />
              <p className="urlibrary-contact-link">/lilicrst</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
