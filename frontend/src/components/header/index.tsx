import { HeaderStyled } from "./style";
import { ReactNode } from "react";

interface IHeader {
  children: ReactNode;
}

const Header = ({ children }: IHeader) => {
  return <HeaderStyled>{children}</HeaderStyled>;
};

export default Header;
