import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { ProfilePage } from "@pages/ProfilePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profilepage" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
