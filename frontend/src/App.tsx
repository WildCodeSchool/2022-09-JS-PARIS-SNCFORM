import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { ProfilePage } from "@pages/ProfilePage/ProfilePage";
import { MenuPage } from "@pages/MenuPage/MenuPage";
import "./App.scss";
import { SignUpPage, SignInPage, HomePage } from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="connexion" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
