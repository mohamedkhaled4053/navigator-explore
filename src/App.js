import logo from "./logo.svg";
import "./App.css";

function App() {
  let obj = {
    deviceMemory: navigator.deviceMemory,
    connection: navigator.connection,
    gpu: navigator.gpu,
    hardwareConcurrency: navigator.hardwareConcurrency,
    mediaCapabilities: navigator.mediaCapabilities,
    storage: navigator.storage,
    userAgent: navigator.userAgent,
    userAgentData: navigator.userAgentData,
    serial: navigator.serial,
    xr: navigator.xr,
    windowControlsOverlay: navigator.windowControlsOverlay,
    screen:`${window.screen.width} x ${window.screen.height}`,
  };

  console.log(obj);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
