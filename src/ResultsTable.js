import "./ResultsTable.css";
export default function ResultsTable({
  submittedNames, GUNDATA,
  secretGunData,
  secretGun,
  setGameWon
}) {
  function formatList(list) {
    if (list.length === 0) {
      return <li>None</li>;
    }
    return list.map((item) => <li key={item}>{item}</li>);
  }
  function checkMatching(curList, secretList) {
    let matches = 0;
    for (const ele of curList) {
      if (secretList.includes(ele)) {
        matches++;
      }
    }
    if (matches === secretList.length && curList.length === secretList.length) {
      return "all";
    } else if (matches === 0) {
      return "none";
    } else {
      return "partial";
    }
  }

  const trArray = submittedNames
    .slice()
    .reverse()
    .map((name) => {
      const ammoMatch = checkMatching(GUNDATA[name].ammoType, secretGunData.ammoType);
      const attachmentMatch = checkMatching(GUNDATA[name].attachments, secretGunData.attachments);
      const firingModeMatch = checkMatching(GUNDATA[name].firingMode, secretGunData.firingMode);
      if (submittedNames.includes(secretGun)) {
        setGameWon(true);
      }
      return (<tr key={name}>
        <td>{name}</td>
        <td style={{backgroundColor: ammoMatch === "all" ? "rgba(0, 255, 0, 0.59)" : ammoMatch === "none" ? "rgba(255, 0, 0, 0.59)" : "rgba(219, 132, 13, 0.59)"}}>{formatList(GUNDATA[name].ammoType)}</td>
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
        >Season {GUNDATA[name].releaseDate} {secretGunData.releaseDate > GUNDATA[name].releaseDate ? "↑" : secretGunData.releaseDate < GUNDATA[name].releaseDate ? "↓" : ""}</td>
        <td
          style={{
            fontSize: GUNDATA[name].attachments.length > 2 ? "85%" : "100%",
            backgroundColor: attachmentMatch === "all" ? "rgba(0, 255, 0, 0.59)" : attachmentMatch === "none" ? "rgba(255, 0, 0, 0.59)" : "rgba(219, 132, 13, 0.59)"
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
        >{GUNDATA[name].damagePerSecond} {secretGunData.damagePerSecond> GUNDATA[name].damagePerSecond? "↑" : secretGunData.damagePerSecond< GUNDATA[name].damagePerSecond ? "↓" : ""}</td>
        <td style={{backgroundColor: firingModeMatch === "all" ? "rgba(0, 255, 0, 0.59)" : firingModeMatch === "none" ? "rgba(255, 0, 0, 0.59)" : "rgba(219, 132, 13, 0.59)"}}>{formatList(GUNDATA[name].firingMode)}</td>
      </tr>);
    });
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
