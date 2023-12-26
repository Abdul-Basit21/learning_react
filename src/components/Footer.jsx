import "./Footer.css";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-4">
              <div className="logo">
                <img src={logo} alt="logo-footer" />
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <h4 className="mt-3">Primary Links</h4>
              <ul className="list-unstyled columns-2">
                <li>
                  <a href="#!">Home</a>
                </li>
                <li>
                  <a href="#!">About</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
                <li>
                  <a href="#!">Privacy Policy</a>
                </li>
                <li>
                  <a href="#!">Terms & Condition</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-12 col-lg-3">
              <h4 className="mt-3">Newsletter</h4>
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Subscribe</label>
                  <input
                    type="text"
                    name="subs"
                    id="subs"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary mt-2 d-block btn-sm"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
