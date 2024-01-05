import "../index.css";
import "./SubmitButton.css";
import { Navigate, useNavigate } from "react-router-dom";

function SubmitButton({to, children}) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(to);
  }

  return (
    <div onClick={handleClick}>
      <h2 className="sub-btn">{children}</h2>
    </div>
  );
}

export default SubmitButton;
