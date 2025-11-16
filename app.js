function detectParadoxes(symptoms) {
  const paradoxen = [];

  if (symptoms.includes("double")) {
    paradoxen.push("Dubbele tijdlijnen: meerdere termen claimen hetzelfde punt in de tijdlijn.");
  }
  if (symptoms.includes("lost-rel")) {
    paradoxen.push("Weggevallen relaties: links zijn verdwenen bij eerdere regeneraties.");
  }
  if (symptoms.includes("outdated")) {
    paradoxen.push("Verouderde verschijningen: termen passen niet meer bij deze tijd.");
  }
  if (symptoms.includes("closed")) {
    paradoxen.push("Gesloten universum: er zijn geen koppelingen naar andere stelsels.");
  }
  if (symptoms.includes("vanish")) {
    paradoxen.push("Verdwenen termen: de TARDIS ziet ze wel, maar gebruikers niet.");
  }
  if (symptoms.includes("mutate")) {
    paradoxen.push("Spontane mutaties: wijzigingen zonder beheerder of log.");
  }
  if (symptoms.includes("overlap")) {
    paradoxen.push("Overlappende universa: meerdere bronnen claimen hetzelfde domein.");
  }

  return paradoxen;
}