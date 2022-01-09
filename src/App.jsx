import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator-grid">

        <div className="output">
          <div className="previous-operand"></div>
          <div className="current-operand"></div>
        </div>

        <button className="spand-two">AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>X</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className="spand-two">=</button>

      </div>
    </div>
  );
}

export default App;
