import { Routes, Route } from "react-router-dom";
import { Layout, PrivateRoute } from "@components/index";
import { ProfilePage } from "@pages/ProfilePage/ProfilePage";
import "./App.scss";
import {
  SignUpPage,
  SignInPage,
  HomePage,
  MenuPage,
  LearningPage,
} from "@pages/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* PrivateRoute prevents connected users from accessing it */}
          <Route element={<PrivateRoute isLoading={!false} />}>
            <Route path="inscription" element={<SignUpPage />} />
            <Route path="connexion" element={<SignInPage />} />
          </Route>

          {/* PrivateRoute prevents not connected users from accessing it */}
          <Route element={<PrivateRoute isLoading={false} />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="formations" element={<LearningPage />} />
            <Route path="menu" element={<MenuPage />} />
          </Route>

          {/* Routes accessible to all users */}
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
