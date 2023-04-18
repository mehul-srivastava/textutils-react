import { useState } from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleMode = () => {
    if (theme == "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#343a40";
    }
  };
  return (
    <>
      <Navbar title="TextUtilsApp" mode={theme} toggleMode={toggleMode} />
      <TextForm mode={theme} />
      {/* <About mode={theme} /> */}
    </>
  );
}

export default App;
