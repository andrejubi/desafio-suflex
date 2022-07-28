import { ContainerStyled } from "./style";
import { ReactNode } from "react";

interface IContainer {
  children: ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};

export default Container;
