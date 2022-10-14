import { Button } from "../styles";

function Botao({ estilo, titulo, onClickHandler, buttonStyle }) {
  return (
    <Button
      // className={className}
      // style={estilo}
      onClick={onClickHandler}
      color={buttonStyle.color}
      backgroundcolor={buttonStyle.backgroundcolor}
    >
      {titulo}
    </Button>
  );
}

export default Botao;
