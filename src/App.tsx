import "./App.css";
import NexusLogo from "../src/assets/nexus-link-logo.png";
import ConstructionImg from "../src/assets/under-construction.png";

function App() {
  return (
    <div className="content">
      <img id="logo" src={NexusLogo} alt="logo" />
      <h1 className="title">Em Construção</h1>
      <img id="construction" src={ConstructionImg} alt="under construction" />
    </div>
  );
}

export default App;
