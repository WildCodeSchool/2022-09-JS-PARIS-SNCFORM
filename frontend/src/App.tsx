import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { ProfilPage } from "@pages/ProfilPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="profilpage" element={<ProfilPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
