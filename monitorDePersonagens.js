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
  let getSvg = {
    drop: `
          <svg width="25px" viewbox="0 0 50 42">
            <path class="svg-drop"
              d="M15 6
              Q 15 6, 25 18
              A 12.8 12.8 0 1 1 5 18
              Q 15 6 15 6z"/>
          </svg>`,
    network: `
            <svg width="20" height="20" viewBox="61.239 82.669 276.924 236.515">
              <path 
                d="M138.163 83.078
                c-11.854 1.982-21.682 8.771-29.076 20.086-17.375 26.59-12.092 64.338 11.56 82.596 5.123 3.955 5.259 4.121 5.163 6.316-.236 5.425-3.184 7.934-18.667 15.885-18.682 9.594-23.108 12.474-29.619 19.273-9.4 9.818-14.36 21.394-15.876 37.052-.24 2.469-.527 5.178-.638 6.02l-.203 1.531h57.896l5.036-5.017c8.38-8.348 17.086-14.261 32.36-21.977 4.161-2.102 7.568-3.945 7.57-4.094.003-.15-2.19-3.229-4.873-6.843-10.002-13.477-13.986-23.295-15.563-38.362-3.459-33.034 10.222-60.656 36.563-73.821 4.823-2.411 5.031-2.727 3.881-5.9-7.87-21.717-27.405-35.771-45.514-32.745m111.664.198c-12.978 2.722-24.584 12.964-31.731 27.999-3.678 7.739-3.689 7.707 3.974 11.614 38.758 19.76 47.371 77.266 16.976 113.349-1.945 2.309-3.536 4.282-3.536 4.386 0 .104 3.995 2.19 8.878 4.635 16.471 8.251 23.205 12.85 32.113 21.933l4.561 4.65 28.551-.105 28.55-.104-.11-5.295c-.256-12.306-4.495-25.067-11.371-34.229-6.374-8.493-13.568-13.616-33.553-23.897-17.141-8.818-17.956-9.504-18.689-15.738l-.268-2.279 1.996-1.718c13.723-11.812 20.37-22.03 23.387-35.952 6.466-29.845-8.522-60.997-32.845-68.268-4.023-1.203-13.265-1.74-16.883-.981m-55.133 47.747c-10.132 1.005-21.43 8.503-28.393 18.842-18.475 27.432-12.334 67.914 12.905 85.066l3.039 2.065-.004 2.624c-.011 6.296-.06 6.334-25.506 19.76-21.947 11.579-31.456 22.086-36.074 39.86-1.418 5.459-3.029 19.072-2.338 19.763.099.099 36.976.181 81.949.181h81.769l-.004-.919c-.035-8.242-3.074-21.744-6.545-29.081-6.52-13.783-15.269-21.238-38.961-33.198-16.802-8.481-17.959-9.449-18.78-15.707-.331-2.518.139-3.241 3.997-6.144 26.728-20.116 30.222-64.981 7.007-89.97-6.603-7.107-15.712-12.384-22.298-12.916-5.624-.455-8.836-.517-11.763-.226" fill-rule="evenodd"/>
            </svg>`,
    person: `
              <svg class="image ts-convic-image ts-convic-svg" viewBox="0 0 512 512" style="height: 50px; width: 50px;">
                <path d="M0 0h512v512H0z" fill="#000" fill-opacity="1"></path>
                <g class="" transform="translate(0,0)" style="">
                  <path 
                    d="M250.882 22.802c-23.366 3.035-44.553 30.444-44.553 65.935 0 19.558 6.771 36.856 16.695 48.815l11.84 14.263-18.217 3.424
                    c-12.9 2.425-22.358 9.24-30.443 20.336-8.085 11.097-14.266 26.558-18.598 44.375-7.843 32.28-9.568 71.693-9.842 106.436
                    h42.868l11.771 157.836c29.894 6.748 61.811 6.51 90.602.025l10.414-157.86h40.816
                    c-.027-35.169-.477-75.126-7.584-107.65-3.918-17.934-9.858-33.372-18.04-44.343-8.185-10.97-18.08-17.745-32.563-19.989
                    l-18.592-2.88 11.736-14.704c9.495-11.897 15.932-28.997 15.932-48.082 0-37.838-23.655-65.844-49.399-65.844z" 
                    fill="#fff" fill-opacity="1">
                  </path>
                </g>
              </svg>`,
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

  let createActorWrapper = (actor, resourcesGridWrapper) => {
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

    let regex = /(<.*>)(.+)(; *)(.+)(<.*>)/gm;

    let touchstonesList = [];
    touchstones.replace(regex, (match, p1, p2, p3, p4, p5) => {
      let img = game.journal.contents.filter(
        (entry) => entry.data.name === p4
      )[0]?.data.img;
      let touchstoneImage = img != undefined ? img : "img";
      touchstonesList.push({ conviction: p2, touchstone: p4, touchstoneImage });
    });

    let getTooltip = {
      bloodPotency: `
      <div class="tooltip blood-potency" data="${bloodPotencyValue}">
          ${getSvg.drop}
          <div class="tooltip-body blood-potency-body">
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.bloodSurge}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.surge}</span>
              </div>
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.powerBonus}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.power}</span>
              </div>
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.FeedingPenalty}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.feeding}</span>
              </div>
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.MendAmount}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.mend}</span>
              </div>
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.RouseReRoll}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.rouse}</span>
              </div>
              <div class="label-wrapper">
                  <span class="label-resources blood-gifts-label">${getPlaceholder.BaneSeverity}</span>
                  <span class="label-resources blood-gifts-content">${bloodPotency.bane}</span>
              </div>
          </div>
      </div>`,
      touchstones: `
      <div class="tooltip touchstones">
          ${getSvg.network}
          <div class="tooltip-body touchstones-body">
              ${touchstonesList
                .map(
                  (tsConvic) => `
              <div class="touchstones-content">
                  ${
                    tsConvic.touchstoneImage != "img"
                      ? `<img class="image ts-convic-image" src=${tsConvic.touchstoneImage}/>`
                      : getSvg.person
                  }
                  <span class="label-resources blood-gifts-label ts-name">${
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
    <div class="blood-image-wrapper">
        ${getTooltip.bloodPotency} ${getTooltip.touchstones}
        <img class="image" src=${actorImg} alt="img" />
    </div>
    <div class="header-Wrapper-content">
        <div class="header-content">
            <h1 class="label-resources name">${actorName}</h1>
            <div class="label-wrapper">
                <h3 class="label-resources core">${getPlaceholder.concept}</h3>
                <h3 class="label-resources dialog-resources-content">${concept}</h3>
            </div>
            <div class="label-wrapper">
                <h3 class="label-resources core">${getPlaceholder.ambition}</h3>
                <h3 class="label-resources dialog-resources-content">${ambition}</h3>
            </div>
            <div class="label-wrapper">
                <h3 class="label-resources core">${getPlaceholder.desire}</h3>
                <h3 class="label-resources dialog-resources-content">${desire}</h3>
            </div>
        </div>
        <div class="hunger-wrapper">
          ${hungerMarks.map(
            (mark) =>
              `<div id="huger-${mark.dataIndex}" class="hunger-mark" data-state=${mark.dataState}></div>`
          )}
        </div>
    </div>`;

    healthPoints.innerHTML += `
        <div class="flexrow">
          <label class="resources-label">${getPlaceholder.health}</label>
        </div>
        <div class="resources-counter" data-states="/:superficial,x:aggravated" data-max="${
          health.max
        }" data-superficial="${health.superficial}" data-aggravated="${
      health.aggravated
    }" data-name="data.health">
            ${healthMarks.map(
              (mark) =>
                `<span class="resources-counter-step" data-index=${mark.dataIndex} data-state=${mark.dataState}></span>`
            )}
        </div>`;
    willpowerPoints.innerHTML += `
        <div class="flexrow">
          <label class="resources-label">${getPlaceholder.willpower}</label>
        </div> 
        <div class="resources-counter" data-states="/:superficial,x:aggravated" data-max="${
          willpower.max
        }" data-superficial="${willpower.superficial}" data-aggravated="${
      willpower.aggravated
    }" data-name="data.willpower">
            ${willpowerMarks.map(
              (mark) =>
                `<span class="resources-counter-step" data-index=${mark.dataIndex} data-state=${mark.dataState}></span>`
            )}
        </div>`;

    humanityPoints.innerHTML += `
      <div class="flexrow">
        <label class="resources-label">${getPlaceholder.humanity}</label>
      </div>
      <div class="resources-counter" data-states="/:stains,-:value" data-value="${
        humanity.value
      }" data-stains="${humanity.stains}"  data-name="data.humanity">
          ${humanityMarks.map(
            (mark) =>
              `<span class="resources-counter-step" data-index=${mark.dataIndex} data-state=${mark.dataState}></span>`
          )}
        </div>`;
  };

  let actors = game.actors.filter(
    (actor) => actor.type == "vampire" || actor.type == "character"
  );

  let composeDialog = (actor) => {
    let resourcesGridWrapper = document.createElement("div");
    resourcesGridWrapper.className = "resources grid-column";
    resourcesGridWrapper.id = actor.id;
    div.appendChild(resourcesGridWrapper);
    createActorWrapper(actor, resourcesGridWrapper);
  };

  let storytellerDialog = () => actors.forEach((actor) => composeDialog(actor));

  let playerDialog = () => composeDialog(game.user.character);

  game.user.isGM ? storytellerDialog() : playerDialog();

  let content = `
  <style>
  .blood-image-wrapper {
    position: relative;
  }
  
  .tooltip {
    z-index: 1;
    position: absolute;
  }
  
  .tooltip .tooltip-body {
    visibility: hidden;
    width: 300px;
    padding: 5px 5px 0 0;
    border-bottom: 2px solid #790813;
    border-left: 2px solid #790813;
    border-radius: 0 10px 0 10px;

  /* Position the tooltip */
    position: absolute;
    left: 15px;
    z-index: 1;
  }
  
  .tooltip:hover .tooltip-body {
    visibility: visible;
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
  
  .ts-convic-svg {
    background: black;
    border-radius: 50%;
  }
  
  .ts-convic-conviction {
    display: flex;
    width: 95%;
    padding-left: 5px;
  }
  
  .blood-potency[data] {
    left: 35px;
    top: -12px;
  }
  
  .blood-potency[data]::after {
    content: attr(data);
    position: absolute;
    color: white;
    font-size: 10px;
    font-weight: bold;
    left: 5px;
    top: 7px;
    z-index: 1;
  }
  
  .touchstones {
    left: -5px;
    top: -10px;
  }
  
  .resources-label {
    margin: 2px 0px;
    border-bottom: 2px solid #790813;
    border-left: 2px solid #790813;
    border-radius: 0 0 0 10px;
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
  
  .image {
    width: 50px;
    margin-right: 15px;
    border: 0;
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
  
  .header-content {
    border-bottom: 2px solid #790813;
    border-left: 2px solid #790813;
    border-radius: 0 0 0 10px;
    margin-bottom: 5px;
  }
  
  .label-wrapper {
    display: flex;
    flex-direction: row;
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
  
  .core {
    background: #790813;
    width: 30%;
  }
  
  .blood-gifts-label {
    border-top: 2px solid rgba(58,41,42,0.8);
    background: #790813;
    width: 46%;
  }
  
  .ts-name {
    border-top: 0;
    width: 100%;
  }
  
  .dialog-resources-content {
    background: #94686c;
    padding-left: 5px;
    border-radius: 0 10px 10px 0;
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
  
  .hunger-mark[data-state=""] {
    display: inline-block;
    box-shadow: inset 2px 3px 5px #000000, 0px 1px 1px #333;
    background-color: rgb(224, 221, 212);
    height: 15px;
    width: 15px;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
  }
  
  .hunger-mark[data-state="x"] {
    display: inline-block;
    box-shadow: inset 2px 3px 5px #000000, 0px 1px 1px #333;
    background-color: #790813;
    height: 15px;
    width: 15px;
    border-radius: 0% 50% 50% 50%;
    transform: rotate(45deg);
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
  </style>
  <h1 class="header-label">Characters Monitor</h1>
  <body id="body" class="body-monitor">
      <div id="monitor-container" class="body-fields"></div>
  </body>
  <script>
      document.getElementById('monitor-container').appendChild(div);
  </script>
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
