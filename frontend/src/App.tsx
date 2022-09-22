import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import "./App.scss";
import {
  SignUpPage,
  SignInPage,
  HomePage,
  ProfilePage,
  EditProfilePage,
  MenuPage,
} from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inscription" element={<SignUpPage />} />
          <Route path="profilepage" element={<ProfilePage />} />
          <Route path="editprofile" element={<EditProfilePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="connexion" element={<SignInPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
