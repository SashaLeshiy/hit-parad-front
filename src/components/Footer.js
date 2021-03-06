import React from 'react';

function Footer({ headlessPage }) {
      return (
            (<footer className={`footer section ${headlessPage ? "hidden" : ""}`}>
                  <p className="footer__copyright">&copy; {new Date().getFullYear()} Hitallica</p>
            </footer>)
      );
}
export default Footer;