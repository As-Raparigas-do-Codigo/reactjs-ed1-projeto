function Botao({ estilo, titulo, onClickHandler }) {
    return (
        <button
            // className={className}
            // style={estilo}
            onClick={onClickHandler}
        >
            {titulo}
        </button>
    );
}

export default Botao;
