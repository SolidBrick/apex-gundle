import "./ResultsTable.css";
export default function ResultsTable({
  submittedNames,
  GUNDATA,
  secretGunData,
}) {
  function formatList(list) {
    if (list.length === 0) {
      return <li>None</li>;
    }
    return list.map((item) => <li key={item}>{item}</li>);
  }

  const trArray = submittedNames
    .slice()
    .reverse()
    .map((name) => (
      <tr key={name}>
        <td>{name}</td>
        <td>{formatList(GUNDATA[name].ammoType)}</td>
        <td
          style={{
            backgroundColor:
              GUNDATA[name].weaponClass === secretGunData.weaponClass
                ? "rgba(0, 255, 0, 0.59)"
                : "rgba(255, 0, 0, 0.59)",
          }}
        >
          {GUNDATA[name].weaponClass}
        </td>
        <td
          style={{
            backgroundColor:
              GUNDATA[name].releaseDate === secretGunData.releaseDate
                ? "rgba(0, 255, 0, 0.59)"
                : "rgba(255, 0, 0, 0.59)",
          }}
        >Season {GUNDATA[name].releaseDate}</td>
        <td
          style={{
            fontSize: GUNDATA[name].attachments.length > 2 ? "85%" : "100%",
          }}
        >
          {formatList(GUNDATA[name].attachments)}
        </td>
        <td
          style={{
            backgroundColor:
              GUNDATA[name].damagePerSecond === secretGunData.damagePerSecond
                ? "rgba(0, 255, 0, 0.59)"
                : "rgba(255, 0, 0, 0.59)",
          }}
        >{GUNDATA[name].damagePerSecond}</td>
        <td>{formatList(GUNDATA[name].firingMode)}</td>
      </tr>
    ));
  return (
    <table className="ResultsTable">
      <tr className="TableHeader">
        <th style={{ width: "6em" }}>Gun</th>
        <th style={{ width: "5em" }}>Ammo Type</th>
        <th style={{ width: "5em" }}>Weapon Class</th>
        <th style={{ width: "6em" }}>Release Date</th>
        <th style={{ width: "10em" }}>Attachments</th>
        <th style={{ width: "6em" }}>Damage Per Second</th>
        <th style={{ width: "5em" }}>Firing Modes</th>
      </tr>
      {trArray}
    </table>
  );
}
