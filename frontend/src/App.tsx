import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { HomePage } from "@pages/HomePage/HomePage";
import { SignUpPage } from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
