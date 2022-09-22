import { useEffect, useState } from "react";
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
import { ContextProvider } from "@context/index";
import { UserType } from "@type/index";

function App() {
  const [user, setUser] = useState<UserType | null>(null);

  useEffect(() => {
    setUser(null);
  }, []);

  return (
    <div className="App">
      <ContextProvider user={user}>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* PrivateRoute prevents connected users from accessing it */}
            <Route element={<PrivateRoute isLoading={!false} />}>
              <Route path="inscription" element={<SignUpPage />} />
              <Route path="connexion" element={<SignInPage />} />
            </Route>

            {/* PrivateRoute prevents not connected users from accessing it */}
            <Route element={<PrivateRoute isLoading />}>
              <Route path="profile" element={<ProfilePage />} />
              <Route path="formations" element={<LearningPage />} />
              <Route path="menu" element={<MenuPage />} />
            </Route>

            {/* Routes accessible to all users */}
            <Route path="/" element={<HomePage />} />
          </Route>
        </Routes>
      </ContextProvider>
    </div>
  );
}

export default App;
