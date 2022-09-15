import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { ProfilePage } from "@pages/ProfilePage";
import "./App.scss";
import { HomePage } from "@pages/HomePage/HomePage";
import { SignUpPage } from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
