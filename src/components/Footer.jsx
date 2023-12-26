import "./Footer.scss";
import logo from "../images/logo.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid newsletter">
          <div className="container py-4">
            <div className="row">
              <div className="col-12 px-2">
                <div className="row align-items-center">
                  <div className="col-6">
                    <h4 className="mb-0 text-uppercase">
                      Stay Connected! Sign up for our newsletter
                    </h4>
                  </div>
                  <div className="col-6 d-flex justify-content-end">
                    <form action="">
                      <div className="form-group position-relative">
                        <input
                          type="text"
                          name="subs"
                          id="subs"
                          className="form-control"
                          placeholder="Enter Your Email"
                        />
                        <button
                          type="submit"
                          className="btn btn-primary d-block btn-sm position-absolute"
                        >
                          Subscribe
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <div className="col-12 col-lg-3"></div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
