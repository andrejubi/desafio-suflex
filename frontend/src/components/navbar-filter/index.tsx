import { NavbarFilterStyled } from "./style";
import { useState } from "react";
import Textfield from "../textfield";
import List from "../list";

interface INavbarFilter {
  handleFilter: (filterString: string) => void;
}

const NavbarFilter = ({ handleFilter }: INavbarFilter) => {
  const [searchCharacterState, setSearchCharacterState] = useState("");
  const [emphasisTextState, setEmphasisTextState] = useState("");

  const lis: any = {
    "": "Todos",
    human: "Humanos",
    alien: "Aliens",
  };

  const handleSpecieFilter = (emphasisText: string) => {
    const filterStateAux = `&species=${emphasisText}&name=${searchCharacterState}`;
    setEmphasisTextState(emphasisText);
    handleFilter(filterStateAux);
  };

  const handleNameFilter = (name: string) => {
    const filterStateAux = `&species=${emphasisTextState}&name=${name}`;
    setSearchCharacterState(name);
    handleFilter(filterStateAux);
  };

  return (
    <NavbarFilterStyled>
      <div className="filter-by-search">
        <Textfield
          type="search"
          name="buscar personagem"
          placeholder="Buscar"
          value={searchCharacterState}
          handleChange={(event) => handleNameFilter(event?.target.value)}
        />
      </div>
      <div className="filter-by-categories">
        <List
          lis={lis}
          emphasysText={emphasisTextState}
          linkFilter={handleSpecieFilter}
        />
      </div>
    </NavbarFilterStyled>
  );
};

export default NavbarFilter;
