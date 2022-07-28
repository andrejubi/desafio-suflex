import { TextFieldStyled } from "./style";
import { v4 as uuid } from "uuid";

interface ITextfield {
  type: string;
  name: string;
  value: string;
  label?: string;
  placeholder?: string;
  autoComplete?: string;
  handleChange: (event: any) => void;
}
const Textfield = ({
  type,
  name,
  value,
  label = "",
  placeholder = "",
  autoComplete = "off",
  handleChange,
}: ITextfield) => {
  const uniqueId = uuid();

  return (
    <TextFieldStyled>
      {label && <label htmlFor={uniqueId}> {label} </label>}
      <input
        type={type}
        id={uniqueId}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete={autoComplete}
      />
    </TextFieldStyled>
  );
};

export default Textfield;
