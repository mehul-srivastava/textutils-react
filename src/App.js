import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtilsApp" aboutText="About Us" />
      <TextForm />
      {/* <About /> */}
    </>
  );
}

export default App;
