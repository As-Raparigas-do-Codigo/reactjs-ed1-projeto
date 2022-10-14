import React, { useState } from "react";
import "./index.scss";
import { Title } from "../../styles.js";
import FormularioTarefa from "../FormularioTarefa";

function App() {
  const [novaTarefa, setNovaTarefa] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function removerTarefa() {
    let tarefasTemp = [...tarefas];
    tarefasTemp.pop();
    setTarefas(tarefasTemp);
  }

  return (
    <div className="App">
      <Title>TODO List</Title>
      <FormularioTarefa
        onNovaTarefa={(e) => setNovaTarefa(e.target.value)}
        onTarefaAdicionada={() => setTarefas([...tarefas, novaTarefa])}
        onTarefaRemovida={() => removerTarefa()}
      />

      <ul>
        {tarefas.map((tarefa, key) => (
          <li key={key}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
