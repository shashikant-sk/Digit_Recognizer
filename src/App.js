import Header from "./components/header";
import WritePad from "./components/writePad";
import InfoPad from "./components/infoPad";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        {/* <div className="middle"> */}
          <WritePad />
        {/* </div> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
