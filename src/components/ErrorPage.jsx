import ContactButton from "./buttons/ContactButton";

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center vh-100 d-flex align-items-center justify-content-center flex-column">
          <h1>Error 404</h1>
          <p>Sorry, the page you&#39;re trying to access is unavailable.</p>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
