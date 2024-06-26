import "./Popover.css";
export default function Popover({ possibleMatches, onListClick }) {
  const liArray = possibleMatches.map((name) => (
    <li onClick={() => onListClick(name)}>
      {name.charAt(0).toUpperCase() + name.substring(1)}{" "}
    </li>
  ));
  return <div className="menuContainer">{liArray}</div>;
}
