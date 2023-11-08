import "./App.css";
import Random from "./components/Random.js";
import Tag from "./components/Tag.js";
function App() {
  return (
    <div className="App">
      <h1
        style={{
          backgroundColor: "rgb(153, 183, 44)",
          width: "50%",
          height: "3rem",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "1px 2px 7px black",
          fontSize:"1.5rem"
        }}
      >
        Random GIF Generator
      </h1>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Random />
        <Tag />
      </div>
    </div>
  );
}

export default App;
