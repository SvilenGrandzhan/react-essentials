import "./TabButton.css";

function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{children}</button>
    </li>
  );
}

export default TabButton;
