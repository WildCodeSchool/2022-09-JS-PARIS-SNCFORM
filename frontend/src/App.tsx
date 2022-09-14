import "./App.scss";
import { Routes, Route, Routes, Route } from "react-router-dom";
import { Layout, Layout } from "@components/Layout/Layout";
import { Button } from "@components/Button/Button";
import { HomePage } from "@pages/HomePage/HomePage";
import { SignUpPage } from "@pages/index";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <Button textButton="Oui" />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
