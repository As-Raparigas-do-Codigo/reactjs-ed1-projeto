import Botao from "./Botao";
import { buttonsMap } from "./styles";

function FormularioTarefa({
  onTarefaAdicionada,
  onTarefaRemovida,
  onNovaTarefa,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Introduzir tarefa"
        onChange={onNovaTarefa}
      />
      <Botao
        buttonStyle={buttonsMap.primary}
        estilo={{}}
        titulo="Adicionar"
        onClickHandler={onTarefaAdicionada}
      />
      <Botao
        buttonStyle={buttonsMap.secondary}
        titulo="Remover"
        onClickHandler={onTarefaRemovida}
      />
    </div>
  );
}

export default FormularioTarefa;
