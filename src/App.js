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
    screen: `${window.screen.availWidth} x ${window.screen.availHeight}`,
  };

  console.log(obj);

  return (
    <div className="App">
      <header className="App-header">{obj.screen}</header>
    </div>
  );
}

export default App;
