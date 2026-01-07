import "./scss/main.scss";
import "./scss/reset.css"
import { InfoPage } from "./components/infoPage/InfoPage";
import {Registration} from "./components/registration/Registration"
import {LayOut} from "./components/layout/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
        <Route path="/" element={<InfoPage />} />
        <Route path="/sign-up" element={<Registration />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
