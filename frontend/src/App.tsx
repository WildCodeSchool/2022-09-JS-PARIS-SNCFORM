import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/index";
import { HomePage } from "@pages/HomePage/HomePage";
import { SignUpPage, MenuPage, LearningPage } from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="formations" element={<LearningPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
