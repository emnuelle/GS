import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [color, setColor] = useState("black");
  const [logo, setLogo] = useState("/HealthTag-Logo.svg");
  const [link, setLink] = useState("/");

  useEffect(() => {
    if (window.location.href.endsWith("/") === true) {
      setLogo("/HealthTag-Logo.svg");
      setLink("/login");
      setColor("white");
    } else {
      setLogo("/HealthTag-Logo.svg");
      setLink("/");
      setColor("black");
    }
  }, []);

  return (
    <>
      <Header logo={logo} link={link} color={color} />
      <Outlet />
    </>
  );
}

export default App;
