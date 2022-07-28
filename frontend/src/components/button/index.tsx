import { ButtonStyled } from "./style";

interface IButton {
  type: "submit" | "reset" | "button" | undefined;
  value: string;
  disabled?: boolean;
  clickButton?: () => void;
}

const Button = ({
  type,
  value,
  disabled = false,
  clickButton = undefined,
}: IButton) => {
  return (
    <ButtonStyled>
      <button type={type} onClick={clickButton} disabled={disabled}>
        {value}
      </button>
    </ButtonStyled>
  );
};

export default Button;
