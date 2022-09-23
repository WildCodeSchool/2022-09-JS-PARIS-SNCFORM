import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { ProfilePage } from "@pages/ProfilePage/ProfilePage";
import "./App.scss";
import {
  SignUpPage,
  SignInPage,
  HomePage,
  MenuPage,
  LearningPage,
} from "@pages/index";
import { ProfileBar } from "./components";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route element={<ProfileBar />}>
            <Route path="profile" element={<ProfilePage />} />
          </Route>
          <Route path="formations" element={<LearningPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="connexion" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
