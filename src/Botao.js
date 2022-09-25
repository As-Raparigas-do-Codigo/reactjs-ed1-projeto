function Botao(props) {
    return (
        <button onClick={props.onClickHandler}>{props.titulo}</button>
    );
}

export default Botao;
