import { Routes, Route } from "react-router-dom";
import { Layout, PrivateRoute, ProfileBar } from "@components/index";
import "./App.scss";
import {
  SignUpPage,
  SignInPage,
  HomePage,
  EditProfilePage,
  MenuPage,
  LearningPage,
  LearningCatalogPage,
  ProfilePage,
  ProfilLearningPage,
} from "@pages/index";
import { ContextProvider } from "@context/index";
import { useToken } from "@hooks/useToken";

function App() {
  const { isLogin } = useToken();

  return (
    <div className="App">
      <ContextProvider user={null}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* PrivateRoute prevents connected users from accessing it */}
            <Route element={<PrivateRoute isAuth={!isLogin} />}>
              <Route path="inscription" element={<SignUpPage />} />
              <Route path="connexion" element={<SignInPage />} />
            </Route>

            <Route
              path="catalogue-formations/:catId"
              element={<LearningCatalogPage />}
            />
            {/* PrivateRoute prevents not connected users from accessing it */}
            <Route element={<PrivateRoute isAuth={isLogin} isConnected />}>
              <Route path="formations" element={<LearningPage />} />
              <Route path="menu" element={<MenuPage />} />
            </Route>

            {/* Routes accessible to all users */}
            <Route element={<ProfileBar />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="editprofile" element={<EditProfilePage />} />
              <Route path="learning-profile" element={<ProfilLearningPage />} />
            </Route>
            <Route path="/" element={<HomePage isAuth={isLogin} />} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
