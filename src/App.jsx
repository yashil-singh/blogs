import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { useEffect } from "react";
import Layout from "./components/Layout";
import Account from "./pages/Account";
import Signup from "./pages/Signup";

function App() {
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      if (window.matchMedia("(prefers-color-scheme: dark").matches) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
    }

    const selectedTheme = localStorage.getItem("theme");
    document.body.classList.add(selectedTheme);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
