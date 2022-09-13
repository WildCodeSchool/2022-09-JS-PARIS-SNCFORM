import { Routes, Route } from "react-router-dom";
import { Layout } from "@components/Layout/Layout";
import { MenuPage} from "@pages/MenuPage/MenuPage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="/iconlink" element={<MenuPage/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;
