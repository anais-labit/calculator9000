import "../css/NumberButton.css";

const NumberButton = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default NumberButton;
