import { isAuthenticated } from "../../services/auth";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { CardStyled } from "./style";

interface ICard {
  title: string;
  image: string;
  link: string;
  checkedStar: boolean;
  handleClick?: () => void;
}

const Card = ({
  title,
  image,
  link,
  checkedStar = false,
  handleClick = () => {},
}: ICard) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(link);
  };

  return (
    <div>
      <CardStyled>
        <div className="image-content" onClick={redirect}>
          <img src={image} alt={title} />
        </div>
        <div className="footer-content">
          <span onClick={redirect}>{title}</span>
          {isAuthenticated() && (
            <div
              onClick={handleClick}
              className={checkedStar ? "star checkedStar" : "star"}
            >
              <FaStar></FaStar>
            </div>
          )}
        </div>
      </CardStyled>
    </div>
  );
};

export default Card;
