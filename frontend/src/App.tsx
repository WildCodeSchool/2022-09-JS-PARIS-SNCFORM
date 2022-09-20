import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { SignUpPage, SignInPage, HomePage } from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="connexion" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
