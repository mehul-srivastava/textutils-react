import { useState } from "react";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {
  const [theme, setTheme] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = (dark_theme = null) => {
    switch (dark_theme) {
      case "red":
        document.body.style.backgroundColor = "#380402";
        return;

      case "green":
        document.body.style.backgroundColor = "#192b16";
        return;

      case "blue":
        document.body.style.backgroundColor = "#01202e";
        return;

      case "purple":
        document.body.style.backgroundColor = "#2c022e";
        return;

      default:
        break;
    }

    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      document.body.style.color = "#fff";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#343a40";
    }
  };

  const toggleAlert = (type, msg) => {
    setAlert({
      type: type,
      message: msg,
    });

    setTimeout(() => setAlert(null), 1500);
  };
  return (
    <>
      <Navbar
        title="TextUtilsApp"
        mode={theme}
        toggleMode={toggleMode}
        toggleAlert={toggleAlert}
      />
      <Alert details={alert} />
      <TextForm mode={theme} toggleAlert={toggleAlert} />
      {/* <About mode={theme} /> */}
    </>
  );
}

export default App;
