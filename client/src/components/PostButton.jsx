import "../index.css";
import "./PostButton.css";

function PostButton({handleClick, children}) {
  return (
    <div>
      <h2 onClick={handleClick} className="pst-btn">{children}</h2>
    </div>
  );
}

export default PostButton;