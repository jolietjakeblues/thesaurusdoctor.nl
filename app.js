// Helpers om waarden op te halen

function getSymptoms() {
  const boxes = document.querySelectorAll(".symptom");
  const out = [];
  boxes.forEach(b => {
    if (b.checked) out.push(b.value);
  });
  const other = document.getElementById("otherSymptom").value.trim();
  if (other) out.push("other:" + other);
  return out;
}

function getVillains() {
  const boxes = document.querySelectorAll(".villain");
  const out = [];
  boxes.forEach(b => {
    if (b.checked) out.push(b.value);
  });
  return out;
}

// Paradox detectie

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
    paradoxen.push("Gesloten universum: er zijn weinig of geen koppelingen naar andere stelsels.");
  }
  if (symptoms.includes("vanish")) {
    paradoxen.push("Verdwenen termen: de TARDIS ziet ze wel, gebruikers niet.");
  }
  if (symptoms.includes("mutate")) {
    paradoxen.push("Spontane mutaties: wijzigingen zonder beheerder of log.");
  }
  if (symptoms.includes("overlap")) {
    paradoxen.push("Overlappende universa: meerdere bronnen claimen hetzelfde domein.");
  }

  symptoms
    .filter(s => s.startsWith("other:"))
    .forEach(s => {
      paradoxen.push("Specifieke afwijking: " + s.replace("other:", "").trim());
    });

  if (paradoxen.length === 0) {
    paradoxen.push("Geen grote paradoxen gevonden. De tijdlijn oogt redelijk stabiel.");
  }

  return paradoxen;
}

// Villain interpretatie

function detectVillainParadoxes(villains) {
  const out = [];

  if (villains.includes("dalek")) {
    out.push("Dalek paradox: de structuur is zo star dat groei moeilijk wordt en er schaduwlijsten ontstaan.");
  }
  if (villains.includes("cyberman")) {
    out.push("Cyberman paradox: er zijn veel upgrades zonder stabiel wijzigingsproces. Identiteit van termen vervaagt.");
  }
  if (villains.includes("angel")) {
    out.push("Weeping Angel paradox: wijzigingen gebeuren in het donker, zonder logboek. Don’t blink.");
  }
  if (villains.includes("vashta")) {
    out.push("Vashta Nerada schaduw: kleine fouten groeien in stilte. Zonder onderhoud eet dit langzaam de kwaliteit op.");
  }
  if (villains.includes("silence")) {
    out.push("Silence moment: terugkerende problemen verdwijnen steeds uit het gesprek zonder opvolging.");
  }

  return out;
}

// Status bepalen

function determineStatus(symptomCount, villainCount) {
  if (villainCount > 3 || symptomCount > 5) return "Tijdvortex (spoedgeval)";
  if (villainCount > 1 || symptomCount > 3) return "Instabiele tijdlijn";
  if (symptomCount > 1) return "Gefragmenteerde tijdlijn";
  return "Stabiele tijdlijn";
}

// Adviezen opbouwen

function buildAdvice(villains) {
  const actions = [];

  if (villains.includes("dalek")) {
    actions.push({
      title: "Dalek paradox",
      text: [
        "Maak de hiërarchie iets flexibeler. Laat tussenlagen toe voor nieuwe termen.",
        "Kies per domein een leidende bron en leg dat vast.",
        "Documenteer canonieke keuzes zodat er geen schaduwlijsten hoeven te ontstaan."
      ]
    });
  }

  if (villains.includes("cyberman")) {
    actions.push({
      title: "Cyberman paradox",
      text: [
        "Stel vaste release momenten vast voor wijzigingen.",
        "Leg wijzigingen vast in gewone taal in een changelog.",
        "Beperk spontane upgrades die de identiteit van termen aantasten."
      ]
    });
  }

  if (villains.includes("angel")) {
    actions.push({
      title: "Weeping Angel paradox",
      text: [
        "Activeer logging in systemen waarin termen aangepast worden.",
        "Beperk wie welke wijzigingen mag doen.",
        "Plan een periodieke review op onverwachte mutaties. Don’t blink."
      ]
    });
  }

  if (villains.includes("vashta")) {
    actions.push({
      title: "Vashta Nerada schaduw",
      text: [
        "Doorlicht elk jaar een deel van de bron, ook de minder gebruikte termen.",
        "Actualiseer definities en verwijzingen in kleine stappen.",
        "Markeer verouderde termen met datum en verwijs naar de actuele variant."
      ]
    });
  }

  if (villains.includes("silence")) {
    actions.push({
      title: "Silence moment",
      text: [
        "Leg terugkerende problemen expliciet vast in een backlog.",
        "Wijs voor elk probleem een eigenaar en een termijn toe.",
        "Bespreek elk kwartaal wat er echt opgelost is en wat niet mag verdwijnen uit het gesprek."
      ]
    });
  }

  if (actions.length === 0) {
    actions.push({
      title: "Geen grote paradoxen",
      text: [
        "Uw tijdlijn oogt redelijk stabiel.",
        "Plan toch vaste momenten voor onderhoud en review.",
        "Leg eigenaarschap en beslisregels duidelijk vast."
      ]
    });
  }

  return actions;
}

// Render helpers

function renderParadoxes(listEl, items) {
  listEl.innerHTML = "";
  items.forEach(txt => {
    const li = document.createElement("li");
    li.textContent = txt;
    listEl.appendChild(li);
  });
}

function renderAdvice(container, actions) {
  container.innerHTML = "";
  actions.forEach(block => {
    const wrap = document.createElement("div");
    wrap.className = "advice-item";

    const titleEl = document.createElement("div");
    titleEl.className = "advice-title";
    titleEl.textContent = block.title;
    wrap.appendChild(titleEl);

    const ul = document.createElement("ul");
    ul.className = "advice-text";
    block.text.forEach(line => {
      const li = document.createElement("li");
      li.textContent = line;
      ul.appendChild(li);
    });
    wrap.appendChild(ul);

    container.appendChild(wrap);
  });
}

// PDF export

async function exportPdf() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const orgUniverse = document.getElementById("orgUniverse").value || "(onbekend universum)";
  const sourceName = document.getElementById("sourceName").value || "(naam onbekend)";
  const sourceAge = document.getElementById("sourceAge").value || "(onbekend)";
  const regens = document.getElementById("regens").value;
  const status = document.getElementById("diagnosisStatus").textContent || "(geen status)";

  const paradoxEls = document.querySelectorAll("#paradoxList li");
  const paradoxTexts = Array.from(paradoxEls).map(li => li.textContent);

  const adviceEls = document.querySelectorAll(".advice-item");

  let y = 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(14);
  doc.text("ThesaurusDoctor – Time Fix rapport", 10, y);
  y += 8;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Organisatie universum: " + orgUniverse, 10, y); y += 5;
  doc.text("Termenbron: " + sourceName, 10, y); y += 5;
  doc.text("Ouderdom tijdlijn: " + sourceAge, 10, y); y += 5;
  doc.text("Regeneraties: " + regens, 10, y); y += 8;

  doc.setFont("helvetica", "bold");
  doc.text("Status van de tijdlijn:", 10, y); y += 6;
  doc.setFont("helvetica", "normal");
  const statusLines = doc.splitTextToSize(status, 180);
  statusLines.forEach(line => {
    doc.text(line, 10, y);
    y += 5;
  });
  y += 5;

  doc.setFont("helvetica", "bold");
  doc.text("Gevonden paradoxen:", 10, y); y += 6;
  doc.setFont("helvetica", "normal");

  paradoxTexts.forEach(p => {
    if (y > 270) {
      doc.addPage();
      y = 10;
    }
    const lines = doc.splitTextToSize("• " + p, 180);
    lines.forEach(line => {
      doc.text(line, 10, y);
      y += 5;
    });
  });

  if (y > 240) {
    doc.addPage();
    y = 10;
  } else {
    y += 6;
  }

  doc.setFont("helvetica", "bold");
  doc.text("Sonic Screwdriver actions:", 10, y); y += 6;
  doc.setFont("helvetica", "normal");

  adviceEls.forEach(block => {
    if (y > 260) {
      doc.addPage();
      y = 10;
    }
    const title = block.querySelector(".advice-title")?.textContent || "";
    if (title) {
      doc.setFont("helvetica", "bold");
      doc.text("• " + title, 10, y);
      y += 5;
    }
    doc.setFont("helvetica", "normal");
    const lines = block.querySelectorAll("li");
    lines.forEach(li => {
      if (y > 270) {
        doc.addPage();
        y = 10;
      }
      const txt = doc.splitTextToSize("   " + li.textContent, 180);
      txt.forEach(t => {
        doc.text(t, 10, y);
        y += 5;
      });
    });
    y += 3;
  });

  if (y > 250) {
    doc.addPage();
    y = 10;
  } else {
    y += 8;
  }

  doc.setFont("helvetica", "normal");
  doc.text("De tijdlijn kan gestabiliseerd worden.", 10, y); y += 5;
  doc.text("ThesaurusDoctor helpt u uw termenbron door tijd en ruimte heen begrijpelijk en verbonden te houden.", 10, y);

  doc.save("ThesaurusDoctor_TimeFix_Rapport.pdf");
}

// Event listeners

document.addEventListener("DOMContentLoaded", () => {
  const scanBtn = document.getElementById("scanBtn");
  const pdfBtn = document.getElementById("pdfBtn");

  scanBtn.addEventListener("click", () => {
    const symptoms = getSymptoms();
    const villains = getVillains();

    const paradoxen = detectParadoxes(symptoms);
    const villainParadoxen = detectVillainParadoxes(villains);

    const allParadoxen = paradoxen.concat(villainParadoxen);
    const status = determineStatus(symptoms.length, villains.length);

    const orgUniverse = document.getElementById("orgUniverse").value;
    const sourceName = document.getElementById("sourceName").value || "(naam onbekend)";

    const summary = [
      "De TARDIS heeft een snapshot gemaakt van uw termenbron \"" + sourceName + "\" in het universum \"" + orgUniverse + "\".",
      "De tijdlijn is beoordeeld als: " + status + ".",
      "Gebruik de Sonic Screwdriver actions om gericht te werken aan stabilisatie en betere koppelingen met andere universa."
    ].join(" ");

    document.getElementById("diagnosisStatus").textContent = status;
    document.getElementById("statusPill").textContent = status;
    renderParadoxes(document.getElementById("paradoxList"), allParadoxen);
    document.getElementById("summary").textContent = summary;

    const advice = buildAdvice(villains);
    renderAdvice(document.getElementById("adviceList"), advice);

    document.getElementById("diagnosis").classList.remove("hidden");
    document.getElementById("advice").classList.remove("hidden");
  });

  pdfBtn.addEventListener("click", exportPdf);
});