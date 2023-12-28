import "./Footer.scss";
import logo from "../images/logo.png";
import ContactButton from "./buttons/ContactButton";

const Footer = () => {
  const footerHeading = "Let's";
  return (
    <>
      <footer>
        <div className="container-fluid newsletter">
          <div className="container py-4">
            <div className="row">
              <div className="col-12 px-2">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-sm-12 mb-3 mb-lg-0 text-center text-lg-start">
                    <h4 className="mb-0 text-uppercase">
                      Stay Connected! Sign up for our newsletter
                    </h4>
                  </div>
                  <div className="col-lg-6 col-sm-12 d-flex justify-content-end">
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
                          className="btn d-block btn-lg position-absolute"
                        >
                          <i className="fas fa-paper-plane text-white"></i>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-4 footer-section pb-5 pt-2">
          <div className="row footer-row">
            <div className="col-12 col-lg-4 pb-3 pb-lg-0">
              <div className="logo">
                <img src={logo} alt="logo-footer" />
                <p className="text-bold">
                  Our versatile design allows for adaptability to various
                  structures, enhancing the overall construction process.
                </p>
                <div className="bar"></div>
              </div>
            </div>
            <div className="col-12 col-lg-4 pe-5 pt-2 pt-lg-0 pb-3 col-pb-0">
              <h4 className="mt-3 b-heading text-capitalize">
                <span>{footerHeading} talk about</span> you
              </h4>
              <p>
                We understand what your business needs are, and can help you
                reach your goals. Reach out to us today to know more.
              </p>
              <div className="contact-info d-flex justify-content-between">
                <a href="mailto:" className="position-relative" title="Email Us:">
                  info@mage4.com
                </a>
                <a href="tel:" className="position-relative" title="Call Us:">
                  +92 321 12312345
                </a>
              </div>
              <div className="social-links">
                <h5>Follow Us:</h5>
                <div className="links d-flex align-items-center gap-2">
                  <a href="#!">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-x-twitter"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#!">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-4 pe-5 pt-2 pt-lg-0">
              <h4 className="mt-3 b-heading text-capitalize">Get In <span>Touch</span></h4>
              <p>
                If you have any queries, our team is always here to help. Feel
                free to contact us. Click to connect now
              </p>
              <div className="mt-5">
                <ContactButton />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
