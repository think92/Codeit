import "./Button.css";

function Button({ children, onClick, color = "blue", className = "" }) {
  const ClassNames = `Button ${color} ${className}`;
  return (
    <button className={ClassNames} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
