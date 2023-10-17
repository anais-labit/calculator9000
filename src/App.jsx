import "./App.css";
import Title from "./components/jsx/Title";
import Calculator from "./components/jsx/Calculator";

function App() {
  return (
    <div>
      <Title></Title>
      <div className="calculator">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
