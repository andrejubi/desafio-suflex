import { ListStyled } from "./style";

interface IList {
  lis: any;
  emphasysText?: string;
  linkFilter: (li: string) => void;
}

const List = ({ lis, emphasysText = "", linkFilter }: IList) => {
  const list = Array.isArray(lis) ? (
    <ArrayListComponent
      lis={lis}
      emphasysText={emphasysText}
      linkFilter={linkFilter}
    />
  ) : (
    <ObjectListComponent
      lis={lis}
      emphasysText={emphasysText}
      linkFilter={linkFilter}
    />
  );
  return (
    <ListStyled cursorOnlyInAHref={Array.isArray(lis)}>
      <ul>{list}</ul>
    </ListStyled>
  );
};

const ArrayListComponent = ({ lis, emphasysText = "" }: IList) => (
  <>
    {lis.map((li: string, index: number) => (
      <li className={li === emphasysText ? "emphasisStyle" : ""} key={index}>
        <div dangerouslySetInnerHTML={{ __html: li }} />
      </li>
    ))}
  </>
);
const ObjectListComponent = ({ lis, emphasysText = "", linkFilter }: IList) => (
  <>
    {Object.keys(lis).map((li: string, index: number) => (
      <li
        className={li === emphasysText ? "emphasisStyle" : ""}
        key={index}
        onClick={() => linkFilter(li)}
      >
        {lis[li]}
      </li>
    ))}
  </>
);

export default List;
