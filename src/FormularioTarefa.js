import Botao from "./Botao"

function FormularioTarefa({ onTarefaAdicionada, onTarefaRemovida }) {
    return (
        <div>
            <input type="text" placeholder="Introduzir tarefa" />
            <Botao estilo={{}} titulo="Adicionar" onClickHandler={onTarefaAdicionada} />
            <Botao titulo="Remover" onClickHandler={onTarefaRemovida} />
        </div>
    )
}

export default FormularioTarefa
