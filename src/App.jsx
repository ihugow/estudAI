//Styles
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";

import LayoutPrincipal from './presentation/layouts/LayoutPrincipal'
import LayoutSimples from './presentation/layouts/LayoutSimples'

import HomePage from "./presentation/pages/home/Home";
import LoginPage from "./presentation/pages/login/Login";

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LayoutPrincipal/>}>
        <Route path="/" element={<HomePage />} />
        </Route>

        <Route element={<LayoutSimples />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
