import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AboutPage from "./components/AboutPage";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Layout from "./Layout";
import { ErrorPage } from "./components/ErrorPage";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element="" />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
