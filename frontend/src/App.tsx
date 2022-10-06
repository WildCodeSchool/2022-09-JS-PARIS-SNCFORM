import { Routes, Route, useLocation } from "react-router-dom";
import { Layout, PrivateRoute, ProfileBar } from "@components/index";
import "./App.scss";
import {
  SignUpPage,
  LoginPage,
  HomePage,
  EditProfilePage,
  MenuPage,
  LearningPage,
  LearningCatalogPage,
  ProfilePage,
  LearningDetailPage,
  ProfilLearningPage,
} from "@pages/index";
import { userFetch } from "@services/index";
import { ContextProvider } from "@context/index";
import { useEffect, useState } from "react";
import { UserType } from "@type/index";
import { tokenApp } from "@tools/utils";

function App() {
  const location = useLocation();
  const [user, setUser] = useState<UserType | null>(null);
  const isLogin = !!user;

  useEffect(() => {
    const { id } = tokenApp();
    if (!id) {
      setUser(null);
    } else {
      userFetch.getUserById(id, setUser);
    }
  }, [location]);

  return (
    <div className="App">
      <ContextProvider user={user}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage isAuth={isLogin} />} />
            {/* PrivateRoute prevents connected users from accessing it */}
            <Route element={<PrivateRoute isAuth={!isLogin} />}>
              <Route path="inscription" element={<SignUpPage />} />
              <Route path="connexion" element={<LoginPage />} />
            </Route>
            {/* PrivateRoute prevents not connected users from accessing it */}
            <Route element={<PrivateRoute isAuth={isLogin} isConnected />}>
              <Route
                path="catalogue-formations/:catId"
                element={<LearningCatalogPage />}
              />
              <Route path="formations" element={<LearningPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route element={<ProfileBar />}>
                <Route path="profile" element={<ProfilePage />} />
                <Route path="editprofile" element={<EditProfilePage />} />
              </Route>
              <Route
                path="detail-formations/:learningId"
                element={<LearningDetailPage />}
              />
            </Route>
            {/* Routes accessible to all users */}
            <Route element={<ProfileBar />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="editprofile" element={<EditProfilePage />} />
              <Route path="learning-profile" element={<ProfilLearningPage />} />
            </Route>
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
