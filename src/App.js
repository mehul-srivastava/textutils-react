import Navbar from "./components/Navbar";

let name = "Mehul";
function App() {
  return (
    <>
      <Navbar title="TextUtilsApp" aboutText="About Us" />
      <h1 className="heading">Hello {name}!</h1>
    </>
  );
}

export default App;
