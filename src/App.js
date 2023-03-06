import "./color/style.scss";
import "./App.css";

import Card from "./Components/Card";
import JSONdata from "./data.json";
import { useState } from "react";
function App() {

  const [total, setTotal] = useState(0)

  function somaTotal(e) {
    const dados = document.querySelectorAll('.inputs');
    let sum =0
    dados.forEach(inputs => sum += Number(inputs.value))
    setTotal(sum/dados.length)
  }
  return (
    <div className="App">
      <Card total={parseInt(total)}>
        {JSONdata.map((item) => {
          return (
            <label
              htmlFor={`alterarOvalor${item.id}`}
              key={"oi"}
              style={{ background: item.corSecundario }}
              className="CardItem"
            >
              <div>
                <img src={item.icon} alt />
                <p style={{ color: item.corPrimario }}>{item.category}</p>
              </div>
              <p className="d-flex">
                <input
                  className="inputs"
                  onChange={somaTotal}
                  max={100}
                  defaultValue={100}
                  min={0}
                  type="number"
                  id={`alterarOvalor${item.id}`}
                />
                <span>/100</span>
              </p>
            </label>
          );
        })}
      </Card>
    </div>
  );
}

export default App;
