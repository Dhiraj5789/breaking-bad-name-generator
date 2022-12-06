import NameGenerator from "./name-generator";
import "./App.css";

function App() {
  return (
    <main className="App-header">
      <h1 style={{ fontWeight: "400" }}>
        <span style={{ color: "green", fontWeight: "700" }}>Br</span>eaking{" "}
        <span style={{ color: "green", fontWeight: "700" }}>Ba</span>d
      </h1>
      <NameGenerator />
    </main>
  );
}

export default App;
