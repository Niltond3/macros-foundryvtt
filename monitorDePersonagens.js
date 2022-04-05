main();

async function main() {
  div = document.createElement("div");

  Hooks.on("updateActor", onUpdateActor);

  let getResourceState = {
    heathWillpower: (element, index) =>
      element.superficial > 0 &&
      element.superficial != index &&
      index < element.superficial
        ? { dataIndex: index, dataState: "/" }
        : element.aggravated > 0 &&
          element.superficial + element.aggravated != index &&
          index < element.superficial + element.aggravated
        ? { dataIndex: index, dataState: "x" }
        : { dataIndex: index, dataState: "" },
    humanity: (element, index) =>
      element.value > index
        ? { dataIndex: index, dataState: "-" }
        : element.stains > 0 &&
          element.value + element.stains != index &&
          index < element.value + element.stains
        ? { dataIndex: index, dataState: "/" }
        : { dataIndex: index, dataState: "" },
    hunger: (actorResource, index) =>
      index < actorResource
        ? { dataIndex: index, dataState: "x" }
        : { dataIndex: index, dataState: "" },
  };

  function createResourceList(resourceState, actorResource) {
    let resourceList = [];
    let count =
      resourceState == "heathWillpower"
        ? actorResource.max
        : resourceState == "humanity"
        ? 10
        : 5;
    for (let index = 0; index < count; index++)
      resourceList.push(getResourceState[resourceState](actorResource, index));
    return resourceList;
  }

  let getResourceList = {
    heathWillpower: (actorResource) =>
      createResourceList("heathWillpower", actorResource),
    humanity: (actorResource) => createResourceList("humanity", actorResource),
    hunger: (actorResource) => createResourceList("hunger", actorResource),
  };

  function createWrapper(className, resourcesGridWrapper) {
    let wrapper = document.createElement("div");
    wrapper.className = className;
    resourcesGridWrapper.appendChild(wrapper);
    return wrapper;
  }

  let getPlaceholder = {
    touchstonesAndConvictions: game.i18n.localize(
      "VTM5E.TouchstonesAndConvictions"
    ),
    bloodPotency: game.i18n.localize("VTM5E.BloodPotency"),
    attributes: game.i18n.localize("VTM5E.Attributes"),
    ambition: game.i18n.localize("VTM5E.Ambition"),
    concept: game.i18n.localize("VTM5E.Concept"),
    desire: game.i18n.localize("VTM5E.Desire"),
    health: game.i18n.localize("VTM5E.Health"),
    willpower: game.i18n.localize("VTM5E.Willpower"),
    humanity: game.i18n.localize("VTM5E.Humanity"),
    bloodSurge: game.i18n.localize("VTM5E.BloodSurge"),
    powerBonus: game.i18n.localize("VTM5E.PowerBonus"),
    FeedingPenalty: game.i18n.localize("VTM5E.FeedingPenalty"),
    MendAmount: game.i18n.localize("VTM5E.MendAmount"),
    RouseReRoll: game.i18n.localize("VTM5E.RouseReRoll"),
    BaneSeverity: game.i18n.localize("VTM5E.BaneSeverity"),
  };

  function getBloodPotencyText(level) {
    const BLOOD_POTENCY_TEXT = [
      {
        surge: game.i18n.localize("VTM5E.Add1Dice"),
        mend: game.i18n.localize("VTM5E.1SuperficialDamage"),
        power: game.i18n.localize("VTM5E.None"),
        rouse: game.i18n.localize("VTM5E.None"),
        bane: "0",
        feeding: game.i18n.localize("VTM5E.NoEffect"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add2Dice"),
        mend: game.i18n.localize("VTM5E.1SuperficialDamage"),
        power: game.i18n.localize("VTM5E.None"),
        rouse: game.i18n.localize("VTM5E.Level1"),
        bane: "2",
        feeding: game.i18n.localize("VTM5E.NoEffect"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add2Dice"),
        mend: game.i18n.localize("VTM5E.2SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add1Dice"),
        rouse: game.i18n.localize("VTM5E.Level1"),
        bane: "2",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty1"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add3Dice"),
        mend: game.i18n.localize("VTM5E.2SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add1Dice"),
        rouse: game.i18n.localize("VTM5E.Level2"),
        bane: "3",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty2"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add3Dice"),
        mend: game.i18n.localize("VTM5E.3SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add2Dice"),
        rouse: game.i18n.localize("VTM5E.Level2"),
        bane: "3",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty3"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add4Dice"),
        mend: game.i18n.localize("VTM5E.3SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add2Dice"),
        rouse: game.i18n.localize("VTM5E.Level3"),
        bane: "4",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty4"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add4Dice"),
        mend: game.i18n.localize("VTM5E.3SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add3Dice"),
        rouse: game.i18n.localize("VTM5E.Level3"),
        bane: "4",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty5"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add5Dice"),
        mend: game.i18n.localize("VTM5E.3SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add3Dice"),
        rouse: game.i18n.localize("VTM5E.Level4"),
        bane: "5",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty5"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add5Dice"),
        mend: game.i18n.localize("VTM5E.4SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add4Dice"),
        rouse: game.i18n.localize("VTM5E.Level4"),
        bane: "5",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty6"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add6Dice"),
        mend: game.i18n.localize("VTM5E.4SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add4Dice"),
        rouse: game.i18n.localize("VTM5E.Level5"),
        bane: "6",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty6"),
      },
      {
        surge: game.i18n.localize("VTM5E.Add6Dice"),
        mend: game.i18n.localize("VTM5E.5SuperficialDamage"),
        power: game.i18n.localize("VTM5E.Add5Dice"),
        rouse: game.i18n.localize("VTM5E.Level5"),
        bane: "6",
        feeding: game.i18n.localize("VTM5E.FeedingPenalty7"),
      },
    ];
    return BLOOD_POTENCY_TEXT[level];
  }

  function createActorWrapper(actor, resourcesGridWrapper) {
    let { img: actorImg, data: actorData } = actor;
    let {
      name: actorName,
      data: {
        hunger: { value: actorHunger },
        health,
        willpower,
        humanity,
        headers: { desire, ambition, concept, touchstones },
      },
    } = actorData;
    let bloodPotencyValue = actorData.data.blood.potency;

    let bloodPotency = getBloodPotencyText(bloodPotencyValue);
    let headerWrapper = createWrapper("header-wrapper", resourcesGridWrapper);
    let healthPoints = createWrapper(
      "wrapper health-wrapper",
      resourcesGridWrapper
    );
    let willpowerPoints = createWrapper(
      "wrapper willpower-wrapper",
      resourcesGridWrapper
    );
    let humanityPoints = createWrapper(
      "wrapper humanity-wrapper",
      resourcesGridWrapper
    );

    let hungerMarks = getResourceList.hunger(actorHunger);
    let healthMarks = getResourceList.heathWillpower(health);
    let willpowerMarks = getResourceList.heathWillpower(willpower);
    let humanityMarks = getResourceList.humanity(humanity);

    function htmlDecode(input) {
      let doc = new DOMParser().parseFromString(input, "text/html");
      return doc.documentElement.textContent;
    }

    let regex = /(.+); *(.+)/gm;

    let decodeTouchstone = htmlDecode(touchstones);

    let touchstonesList = [];
    decodeTouchstone.replace(regex, (match, p1, p2) => {
      console.log(match);
      console.log(p1);
      console.log(p2);

      let img = game.journal.contents.filter(
        (entry) => entry.data.name === p2
      )[0]?.data.img;
      let touchstoneImage = img != undefined ? img : "img";
      touchstonesList.push({ conviction: p1, touchstone: p2, touchstoneImage });
      console.log(touchstonesList);
    });

    let getBloodGiftHtml = (placeholder, bloodGift) => `
    <div class="label-wrapper">
        <span class="label-resources resources-placeholder blood-gifts-label">${placeholder}</span>
        <span class="label-resources blood-gifts-content">${bloodGift}</span>
    </div>
    `

    let getTooltip = {
      bloodPotency: `
      <div class="tooltip blood-potency" data="${bloodPotencyValue}">
          <i class="bi bi-droplet-fill bi-tooltip"></i>
          <spam class="tooltip-hide-content tooltip-label">${getPlaceholder.bloodPotency}</spam>
          <div class="wrapper-dialog tooltip-hide-content blood-potency-hide-content">
              ${getBloodGiftHtml(getPlaceholder.bloodSurge,bloodPotency.surge)}
              ${getBloodGiftHtml(getPlaceholder.powerBonus,bloodPotency.power)}
              ${getBloodGiftHtml(getPlaceholder.FeedingPenalty,bloodPotency.feeding)}
              ${getBloodGiftHtml(getPlaceholder.MendAmount,bloodPotency.mend)}
              ${getBloodGiftHtml(getPlaceholder.RouseReRoll,bloodPotency.rouse)}
              ${getBloodGiftHtml(getPlaceholder.BaneSeverity,bloodPotency.bane)}
          </div>
      </div>`,
      attributes: `
      <div class="tooltip attributes">
          <i class="bi bi-bookmarks-fill bi-tooltip"></i>
          <spam class="tooltip-hide-content tooltip-label">${getPlaceholder.attributes}</spam>
          <div class="wrapper-dialog tooltip-hide-content">
          </div>
      </div>
      `,
      touchstones: `
      <div class="tooltip touchstones">
          <i class="bi bi-people-fill bi-tooltip"></i>
          <spam class="tooltip-hide-content tooltip-label">${
            getPlaceholder.touchstonesAndConvictions
          }</spam>
          <div class="wrapper-dialog tooltip-hide-content touchstones-body">
              ${touchstonesList
                .map(
                  (tsConvic) => `
              <div class="touchstones-content">
                  ${
                    tsConvic.touchstoneImage != "img"
                      ? `<img class="image ts-convic-image" src=${tsConvic.touchstoneImage}/>`
                      : `<i class="bi bi-person-bounding-box"></i>`
                  }
                  <span class="label-resources resources-placeholder blood-gifts-label ts-name">${
                    tsConvic.touchstone
                  }</span>
              </div>
              <span class="ts-convic-conviction">"${
                tsConvic.conviction
              }"</span>`
                )
                .join("")}
          </div>
      </div>`,
    };

    headerWrapper.innerHTML += `
    <div class="tooltip-image-wrapper">
        <div class="tooltips-wrapper">
          ${getTooltip.bloodPotency} ${getTooltip.attributes} ${
      getTooltip.touchstones
    }
        </div>
        <img class="image actor-image" src=${actorImg} alt="img" />
    </div>
    <div class="header-Wrapper-content">
        <div class="wrapper-dialog">
            <h1 class="label-resources name">${actorName}</h1>
            <div class="label-wrapper">
                <h3 class="label-resources resources-placeholder">${
                  getPlaceholder.concept
                }</h3>
                <h3 class="label-resources dialog-resources-content">${concept}</h3>
            </div>
            <div class="label-wrapper">
                <h3 class="label-resources resources-placeholder">${
                  getPlaceholder.ambition
                }</h3>
                <h3 class="label-resources dialog-resources-content">${ambition}</h3>
            </div>
            <div class="label-wrapper">
                <span class="label-resources resources-placeholder" end="true" >${
                  getPlaceholder.desire
                }</span>
                <span class="label-resources dialog-resources-content" end="true">${desire}</span>
            </div>
        </div>
        <div class="hunger-wrapper">
          ${hungerMarks.map(
            (mark) =>
              `<div id="huger-${mark.dataIndex}" class="hunger-mark" data-state=${mark.dataState}></div>`
          )}
        </div>
    </div>`;

    let getResourcesInnerHtml = (
      placeholder,
      classState,
      dataValue,
      dataMax,
      dataStains,
      dataSuperficial,
      dataAggravated,
      dataName,
      resourceMarks
    ) => `
    <div class="flexrow">
      <label class="wrapper-dialog resources-label">${placeholder}</label>
    </div>
    <div class="resources-counter" data-states=${classState} data-value=${dataValue} data-max="${dataMax}" data-stains="${dataStains}" data-superficial="${dataSuperficial}" data-aggravated="${dataAggravated}" data-name=${dataName}>
      ${resourceMarks.map(
        (mark) => `
        <span class="resources-counter-step" data-index=${mark.dataIndex} data-state=${mark.dataState}></span>`
      )}
    </div>
    `;

    healthPoints.innerHTML += getResourcesInnerHtml(
      getPlaceholder.health,
      "/:superficial,x:aggravated",
      null,
      health.max,
      null,
      health.superficial,
      health.aggravated,
      "data.health",
      healthMarks
    );

    willpowerPoints.innerHTML += getResourcesInnerHtml(
      getPlaceholder.willpower,
      "/:superficial,x:aggravated",
      null,
      willpower.max,
      null,
      willpower.superficial,
      willpower.aggravated,
      "data.willpower",
      willpowerMarks
    );

    humanityPoints.innerHTML += getResourcesInnerHtml(
      getPlaceholder.humanity,
      "/:stains,-:value",
      humanity.value,
      null,
      humanity.stains,
      null,
      null,
      "data.humanity",
      humanityMarks
    );
  }

  function composeDialog(actor) {
    let resourcesGridWrapper = document.createElement("div");
    resourcesGridWrapper.className = "resources grid-column";
    resourcesGridWrapper.id = actor.id;
    div.appendChild(resourcesGridWrapper);
    createActorWrapper(actor, resourcesGridWrapper);
  }

  let storytellerDialog = () =>
    game.actors
      .filter((actor) => actor.type == "vampire" || actor.type == "character")
      .forEach((actor) => composeDialog(actor));

  let playerDialog = () =>
    game.actors
      .filter(
        (actor) =>
          (actor.type == "vampire" || actor.type == "character") &&
          actor.data.permission[game.userId] != undefined
      )
      .forEach((actor) => composeDialog(actor));

  game.user.isGM ? storytellerDialog() : playerDialog();

  let content = `
  <style>
  .tooltip-image-wrapper {
    position: relative;
    width:70px;
    height:100%;
  }
  .actor-image {
    position:absolute;
    top: 50%;  /* position the top  edge of the element at the middle of the parent */
    left: 50%; /* position the left edge of the element at the middle of the parent */
    transform: translate(-50%, -50%);
  }

  .tooltips-wrapper{
    position: absolute;
    height:18px;
    width:100%;
    box-shadow: inset 2px 3px 5px #000000, 0px 2px 2px #ccc;
    background-color:#790813;
    border-radius:10px 0 0 10px;
  }
  
  .tooltip {
    z-index: 1;
    border-radius:100%;
    position: absolute;

    top: 2px;
  }

  .tooltip-hide-content {
    z-index: -1;
    visibility: hidden;
    opacity:0;
    transition:opacity 0.3s ease-in-out;
    width: 300px;
    margin-top: 5px;    
  /* Position the tooltip */
    position: absolute;
    top: 12px;
  }
  
  .tooltip-label {
    display:flex;
    justify-content:center;
    width:175px;
    font-size: 12px;
    font-weight:bold;
    color: #D8D6CA;
    // box-shadow: inset 2px 3px 5px #000000, 0px 2px 2px #ccc;
    background-color:#790813;
    padding: 2px 5px;
    border-radius:5px 5px 0 0;

    top: -6px;
    left:50px;
  }

  .tooltip:hover .tooltip-hide-content {
    visibility: visible;
    opacity:1;
  }
  
  .touchstones-body {
    background-color: rgba(224, 221, 212,0.8);
  }
  
  .touchstones-content {
    position: relative;
    display: flex;
    flex-direction: row;
  }
  
  .touchstones-content + .touchstones-content::before {
    display: inline-block;
    white-space: pre;
    content: "";
  }
  
  .ts-convic-image {
    position: absolute;
    right: -40px;
    top: -20px;
  }
  
  .ts-convic-conviction {
    display: flex;
    width: 95%;
    min-height: 35px;
    padding-left: 5px;
  }
  
  .blood-potency[data] {
    top: 2px;
    left: 40px;
  }
  
  .blood-potency[data]::after {
    content: attr(data);
    position: absolute;
    color: #740812;
    font-size: 12px;
    font-weight: bold;
    left: 3.2px;
    top: 2px;
    pointer-events: none;
  }
  .blood-potency-hide-content {
    border-top:2px solid #790813;
  }
  .blood-potency:hover::after {
    color: #D8D6CA;
  }

  .touchstones {
    left: 7px;
  }
  .attributes {
    left: 24px;
  }

  .bi {
  }
  .bi-tooltip {
    color:#D8D6CA;
    cursor: pointer;
  }

  .bi-tooltip:hover {
    color:#120000;
  }
  
  .bi-droplet-fill {}

  .bi-people-fill {}

  .bi-person-bounding-box{
    font-size:50px;
    position: absolute;
    right: -25px;
    top: -18px;
    color:#740812;
    background-color:rgba(224, 221, 212,0.8); 
    border-radius:6px;
  }

  .resources-label {
    margin: 2px 0px;
    whidth: 100%;
    color: #790813;
    font-weight: bold;
    padding: 2px;
  }
  
  .wrapper {
    width: 100px;
    margin-bottom: 5px;
  }
  
  .grid-column .header-wrapper {
    grid-column: header;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }
    
  .blood-label {
    width: 80px;
    font-size: 9px;
    align-items: center;
    font-weight: bold;
  }
  
  .header-Wrapper-content {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  
  .label-wrapper {
    display: flex;
  }
  
  .label-resources {
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 2px 2px 2px 2px;
    font-weight: bold;
    width: 100%;
    color: white;
  }
  
  .resources-placeholder {
    background: #790813;
    width: 30%;
  }

  .resources-placeholder[end="true"] {
    border-radius: 0 0 0 12%;
  }

  .blood-gifts-label {
    border-top: 2px solid rgba(58,41,42,0.8);
    width: 46%;
  }
  
  .ts-name {
    border-top: 0;
    width: 100%;
  }
  
  .dialog-resources-content {
    background: #94686c;
    border-radius: 0 10px 10px 0;
  }
  .dialog-resources-content[end="true"] {
    border-radius: 0 10px 0 0;;
  }

  .blood-gifts-content {
    border-top: 2px solid rgba(58,41,42,0.0);
    background-color: rgba(58,41,42,0.8);
  }
  
  .name {
    color: black;
    padding-left: 3px;
  }
  
  .hunger-wrapper {
    margin-bottom: 5px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: transparent;
  }
  .hunger-mark {
    display: inline-block;
    box-shadow: inset 2px 3px 5px #000000, 0px 1px 1px #333;
    height: 15px;
    width: 15px;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
  }

  .hunger-mark[data-state=""] {
    background-color: rgb(224, 221, 212);
  }
  
  .hunger-mark[data-state="x"] {
    background-color: #790813;
  }
  
  .grid-column {
    border-bottom: 2px solid #ccc;
    margin-bottom: 5px;
    display: grid;
    grid-template-areas: "header header header"
          "health willpower humanity";
  }
  
  .grid-column .health-wrapper {
    grid-column-start: health;
    grid-column-end: health;
  }
  
  .grid-column .willpower-wrapper {
    grid-column-start: willpower;
    grid-column-end: willpower;
  }
  
  .grid-column .humanity-wrapper {
    grid-column-start: humanity;
    grid-column-end: humanity;
  }
  
  .resources-counter {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    color: transparent;
  }
  
  .resources-counter .resources-counter-step {
    height: 14px;
    width: 14px;
    border: 2px solid black;
    margin-right: 2px;
  }
  
  .resources-counter .resources-counter-step[data-state="-"] {
    border: 2px solid black;
    background-color: black;
  }
  
  .resources-counter .resources-counter-step[data-state="/"] {
    border: 2px solid black;
    background: linear-gradient(
          135deg,
          transparent 0%,
          transparent 43%,
          black,
          black,
          transparent 57%,
          transparent 100%
          );
  }
  
  .resources-counter .resources-counter-step[data-state="x"] {
    border: 2px solid black;
    background: linear-gradient(
          45deg,
          transparent 0%,
          transparent 43%,
          black,
          black,
          transparent 57%,
          transparent 100%
          ),
          linear-gradient(
          135deg,
          transparent 0%,
          transparent 43%,
          black,
          black,
          transparent 57%,
          transparent 100%
          );
  }

  .body-monitor {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  
  .body-fields .resource {
    border: 0;
    height: 100%;
  }
  
  .header-label {
    font-family: 'Playfair Display', serif !important;
    font-weight: bold;
    font-size: 24px;
    color: #790813;
  }

  .image {
    width: 50px;
    margin-right: 15px;
    border: 0;
  }

  .wrapper-dialog {
    border-bottom: 2px solid #790813;
    border-left: 2px solid #790813;
    border-radius: 0 0 0 10px;
    margin-bottom: 5px;
  }
  </style>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script>
      document.getElementById('monitor-container').appendChild(div);
    </script>
  </head>
  <h1 class="header-label">Characters Monitor</h1>
  <body id="body" class="body-monitor">
      <div id="monitor-container" class="body-fields"></div>
  </body>
  `;
  let dialog = new Dialog({
    title: "Monitor",
    content,
    buttons: {},
  });
  const conteiner = document.getElementById("monitor-container");

  if (!conteiner) dialog.render(true);

  //onUpdateActor(actor, updateData, options, userId)
  function onUpdateActor(actor) {
    let dialogElement = document.getElementById(actor.id);
    dialogElement.innerHTML = "";
    createActorWrapper(actor, dialogElement);
  }
}
