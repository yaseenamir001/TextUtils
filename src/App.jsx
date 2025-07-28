import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
