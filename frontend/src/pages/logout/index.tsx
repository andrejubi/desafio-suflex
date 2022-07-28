import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logout } from "../../services/auth";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/login");
  }, []);

  return <></>;
};

export default Logout;
