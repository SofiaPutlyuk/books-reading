import "./scss/main.scss";
import "./scss/reset.css"
import { InfoPage } from "./components/infoPage/InfoPage";
import {Registration} from "./components/registration/Registration"
import {Login} from "./components/login/Login"
import {LayOut} from "./components/layout/Layout"
import {LibraryPage} from "./components/library/LibraryPage"
import { LibraryIntention } from "./components/library/LibraryIntention";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayOut />}>
        <Route path="/" element={<InfoPage />} />
        <Route path="/sign-up" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/intention" element={<LibraryIntention />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
