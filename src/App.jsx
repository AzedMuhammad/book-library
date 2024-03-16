import MainContent from "./Pages/MainContent";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <img
        src="./src/assets/Cover.png"
        alt=""
        className="absolute right-0 object-cover h-full -z-10"
      />
      <Navbar />
      <MainContent />
    </>
  );
}

export default App;
