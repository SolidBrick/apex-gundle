import "./Popover.css";
export default function Popover({ possibleMatches, listClickHandler}) {
  const liArray = possibleMatches.map((name) => (
    <li key={name} onMouseDown={() => listClickHandler(name)}>
      {name.charAt(0).toUpperCase() + name.substring(1)}{" "}
    </li>
  ));
  return <div className="menuContainer">{liArray}</div>;
}
