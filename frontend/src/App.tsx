import "./App.scss";
import { SignUpPage } from "@pages/index";
import { Layout } from "@components/Layout/Layout";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
