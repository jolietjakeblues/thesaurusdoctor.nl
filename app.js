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
function detectVillains(v) {
  const villains = [];

  if (v.includes("dalek")) {
    villains.push("Dalek paradox: structuur is zo star dat groei stagneert.");
  }
  if (v.includes("cyberman")) {
    villains.push("Cyberman paradox: te veel upgrades zonder stabiel wijzigingsproces.");
  }
  if (v.includes("angel")) {
    villains.push("Weeping Angel paradox: wijzigingen gebeuren in het donker. Don’t blink.");
  }
  if (v.includes("vashta")) {
    villains.push("Vashta Nerada schaduw: kleine fouten groeien in stilte. Breng licht.");
  }
  if (v.includes("silence")) {
    villains.push("Silence moment: ieder overleg vergeet een terugkerend probleem.");
  }

  return villains;
}
function determineStatus(paradoxCount, villainCount) {
  if (villainCount > 3 || paradoxCount > 5) return "Tijdvortex (spoedgeval)";
  if (villainCount > 1 || paradoxCount > 3) return "Instabiele tijdlijn";
  if (paradoxCount > 1) return "Gefragmenteerde tijdlijn";
  return "Stabiele tijdlijn";
}
function buildAdvice(v) {
  const actions = [];

  if (v.includes("dalek")) {
    actions.push({
      title: "Dalek paradox",
      text: [
        "Voeg flexibiliteit toe aan uw hiërarchie.",
        "Introduceer tussenlagen voor nieuwe termen.",
        "Documenteer uitzonderingen en canonieke keuzes."
      ]
    });
  }

  if (v.includes("cyberman")) {
    actions.push({
      title: "Cyberman paradox",
      text: [
        "Stel vaste release momenten vast.",
        "Leg wijzigingen altijd vast in een changelog.",
        "Beperk spontane upgrades."
      ]
    });
  }

  if (v.includes("angel")) {
    actions.push({
      title: "Weeping Angel paradox",
      text: [
        "Activeer logging in systemen.",
        "Beperk wie wijzigingen mag doen.",
        "Plan een periodieke review. Don’t blink."
      ]
    });
  }

  if (v.includes("vashta")) {
    actions.push({
      title: "Vashta Nerada schaduw",
      text: [
        "Doorlicht jaarlijks een deel van de bron.",
        "Begin met vage, weinig gebruikte termen.",
        "Markeer verouderde termen met datumstempels."
      ]
    });
  }

  if (v.includes("silence")) {
    actions.push({
      title: "Silence moment",
      text: [
        "Leg terugkerende problemen expliciet vast.",
        "Wijs een eigenaar toe.",
        "Voorkom dat dit uit gesprekken verdwijnt."
      ]
    });
  }

  return actions;
}