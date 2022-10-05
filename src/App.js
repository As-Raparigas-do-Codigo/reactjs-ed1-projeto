import React, { useState, useEffect } from 'react';
import './App.scss';
import FormularioTarefa from './FormularioTarefa';

function App() {
  const [tarefas, setTarefas] = useState(['passar ferro', 'lavar louça'])
  const [tamanho, setTamanho] = useState(2)

  useEffect(() => {
    setTamanho(tarefas.length)
  
    return () => {
      console.log("componente acabou")
    }
  }, [tarefas, setTamanho])

  function removerTarefa() {
    let tarefasTemp = [...tarefas]
    tarefasTemp.pop()
    setTarefas(tarefasTemp)
  }

  return (
    <div className="App">
      <FormularioTarefa
        onTarefaAdicionada={() => setTarefas([...tarefas, 'lavar roupa'])}
        onTarefaRemovida={() => removerTarefa()}
      />
      <p>{tamanho}</p>
      <ul>
        {
          tarefas.map(
            (tarefa, key) => <li key={key}>{tarefa}</li>
          )
        }
      </ul>
    </div>
  );
}

export default App;
