import "./App.css";
import BasicTextFields from "./TextField.js";
import Button from "@mui/material/Button";
import RandomText from "./Random.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <p>Type the text as it appears below.</p>
      </header>
      <header className="App-body">
        <p id="input"></p>
        <Button
          color="primary"
          variant="contained"
          onClick={() => {
            document.getElementById("input").innerHTML = RandomText();
          }}
        >
          Generate Text
        </Button>
        <br></br>
        <p id="output">
          {" "}
          <BasicTextFields />
        </p>
        <div class="spinner-box">
        <div class="pulse-container">
          <div class="pulse-bubble pulse-bubble-1"></div>
          <div class="pulse-bubble pulse-bubble-2"></div>
          <div class="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
      </header>
 
    </div>
  );
}

export default App;
