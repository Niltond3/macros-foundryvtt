main()

async function main() {
  div = document.createElement('div')

  const getResourceState = {
    heathWillpower: (element, index) =>
      element.superficial > 0 && element.superficial !== index && index < element.superficial
        ? { dataIndex: index, dataState: '/' }
        : element.aggravated > 0 &&
          element.superficial + element.aggravated !== index &&
          index < element.superficial + element.aggravated
        ? { dataIndex: index, dataState: 'x' }
        : { dataIndex: index, dataState: '' },
    humanity: (element, index) =>
      element.value > index
        ? { dataIndex: index, dataState: '-' }
        : element.stains > 0 && element.value + element.stains !== index && index < element.value + element.stains
        ? { dataIndex: index, dataState: '/' }
        : { dataIndex: index, dataState: '' },
    hunger: (actorResource, index) =>
      index < actorResource ? { dataIndex: index, dataState: true } : { dataIndex: index, dataState: false }
  }

  function createResourceList(resourceState, actorResource) {
    const resourceList = []
    const count = resourceState === 'heathWillpower' ? actorResource.max : resourceState === 'humanity' ? 10 : 5
    for (let index = 0; index < count; index++) resourceList.push(getResourceState[resourceState](actorResource, index))
    return resourceList
  }

  const getResourceList = {
    heathWillpower: actorResource => createResourceList('heathWillpower', actorResource),
    humanity: actorResource => createResourceList('humanity', actorResource),
    hunger: actorResource => createResourceList('hunger', actorResource)
  }

  function createWrapper(className, resourcesGridWrapper) {
    const wrapper = document.createElement('div')
    wrapper.className = className
    resourcesGridWrapper.appendChild(wrapper)
    return wrapper
  }

  const getPlaceholder = {
    rouse: game.i18n.localize('VTM5E.RollRouse'),
    frenzy: game.i18n.localize('VTM5E.RollFrenzy'),
    remorse: game.i18n.localize('VTM5E.RollRemorse'),
    roll: game.i18n.localize('VTM5E.Roll'),
    touchstonesAndConvictions: game.i18n.localize('VTM5E.TouchstonesAndConvictions'),
    bloodPotency: game.i18n.localize('VTM5E.BloodPotency'),
    attributes: game.i18n.localize('VTM5E.Attributes'),
    skills: game.i18n.localize('VTM5E.Skills'),
    ambition: game.i18n.localize('VTM5E.Ambition'),
    concept: game.i18n.localize('VTM5E.Concept'),
    desire: game.i18n.localize('VTM5E.Desire'),
    health: game.i18n.localize('VTM5E.Health'),
    willpower: game.i18n.localize('VTM5E.Willpower'),
    humanity: game.i18n.localize('VTM5E.Humanity'),
    bloodSurge: game.i18n.localize('VTM5E.BloodSurge'),
    powerBonus: game.i18n.localize('VTM5E.PowerBonus'),
    FeedingPenalty: game.i18n.localize('VTM5E.FeedingPenalty'),
    MendAmount: game.i18n.localize('VTM5E.MendAmount'),
    RouseReRoll: game.i18n.localize('VTM5E.RouseReRoll'),
    BaneSeverity: game.i18n.localize('VTM5E.BaneSeverity'),
    strength: game.i18n.localize('VTM5E.Strength'),
    charisma: game.i18n.localize('VTM5E.Charisma'),
    intelligence: game.i18n.localize('VTM5E.Intelligence'),
    dexterity: game.i18n.localize('VTM5E.Dexterity'),
    manipulation: game.i18n.localize('VTM5E.Manipulation'),
    wits: game.i18n.localize('VTM5E.Wits'),
    stamina: game.i18n.localize('VTM5E.Stamina'),
    composure: game.i18n.localize('VTM5E.Composure'),
    resolve: game.i18n.localize('VTM5E.Resolve')
  }

  /**
   * It returns an object with the text for each of the Blood Potency effects
   * @param level - The level of Blood Potency.
   * @returns An object with the following properties:
   *   surge: A string with the text for the surge effect
   *   mend: A string with the text for the mend effect
   *   power: A string with the text for the power effect
   *   rouse: A string with the text for the rouse effect
   *   bane: A string with the text for the bane effect
   *   feeding: A string with the text for the feeding effect
   */
  function getBloodPotencyText(level) {
    const BLOOD_POTENCY_TEXT = [
      {
        surge: game.i18n.localize('VTM5E.Add1Dice'),
        mend: game.i18n.localize('VTM5E.1SuperficialDamage'),
        power: game.i18n.localize('VTM5E.None'),
        rouse: game.i18n.localize('VTM5E.None'),
        bane: '0',
        feeding: game.i18n.localize('VTM5E.NoEffect')
      },
      {
        surge: game.i18n.localize('VTM5E.Add2Dice'),
        mend: game.i18n.localize('VTM5E.1SuperficialDamage'),
        power: game.i18n.localize('VTM5E.None'),
        rouse: game.i18n.localize('VTM5E.Level1'),
        bane: '2',
        feeding: game.i18n.localize('VTM5E.NoEffect')
      },
      {
        surge: game.i18n.localize('VTM5E.Add2Dice'),
        mend: game.i18n.localize('VTM5E.2SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add1Dice'),
        rouse: game.i18n.localize('VTM5E.Level1'),
        bane: '2',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty1')
      },
      {
        surge: game.i18n.localize('VTM5E.Add3Dice'),
        mend: game.i18n.localize('VTM5E.2SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add1Dice'),
        rouse: game.i18n.localize('VTM5E.Level2'),
        bane: '3',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty2')
      },
      {
        surge: game.i18n.localize('VTM5E.Add3Dice'),
        mend: game.i18n.localize('VTM5E.3SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add2Dice'),
        rouse: game.i18n.localize('VTM5E.Level2'),
        bane: '3',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty3')
      },
      {
        surge: game.i18n.localize('VTM5E.Add4Dice'),
        mend: game.i18n.localize('VTM5E.3SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add2Dice'),
        rouse: game.i18n.localize('VTM5E.Level3'),
        bane: '4',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty4')
      },
      {
        surge: game.i18n.localize('VTM5E.Add4Dice'),
        mend: game.i18n.localize('VTM5E.3SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add3Dice'),
        rouse: game.i18n.localize('VTM5E.Level3'),
        bane: '4',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty5')
      },
      {
        surge: game.i18n.localize('VTM5E.Add5Dice'),
        mend: game.i18n.localize('VTM5E.3SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add3Dice'),
        rouse: game.i18n.localize('VTM5E.Level4'),
        bane: '5',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty5')
      },
      {
        surge: game.i18n.localize('VTM5E.Add5Dice'),
        mend: game.i18n.localize('VTM5E.4SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add4Dice'),
        rouse: game.i18n.localize('VTM5E.Level4'),
        bane: '5',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty6')
      },
      {
        surge: game.i18n.localize('VTM5E.Add6Dice'),
        mend: game.i18n.localize('VTM5E.4SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add4Dice'),
        rouse: game.i18n.localize('VTM5E.Level5'),
        bane: '6',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty6')
      },
      {
        surge: game.i18n.localize('VTM5E.Add6Dice'),
        mend: game.i18n.localize('VTM5E.5SuperficialDamage'),
        power: game.i18n.localize('VTM5E.Add5Dice'),
        rouse: game.i18n.localize('VTM5E.Level5'),
        bane: '6',
        feeding: game.i18n.localize('VTM5E.FeedingPenalty7')
      }
    ]
    return BLOOD_POTENCY_TEXT[level]
  }

  /**
   * It takes an actor and a wrapper, and creates a wrapper for the actor's resources, and then creates
   * the HTML for the actor's resources
   * @param actor - The actor object
   * @param resourcesGridWrapper - The wrapper that will contain the resources.
   */
  function createActorWrapper(actor, resourcesGridWrapper) {
    const { id: actorId, img: actorImg, data: actorData } = actor
    const {
      name: actorName,
      items,
      data: {
        abilities,
        skills,
        hunger: { value: actorHunger },
        health,
        willpower,
        humanity,
        disciplines,
        headers
      }
    } = actorData
    const { touchstones } = headers

    const bloodPotencyValue = actorData.data.blood.potency

    const bloodPotency = getBloodPotencyText(bloodPotencyValue)

    const headerWrapper = createWrapper('header-wrapper', resourcesGridWrapper)
    const healthPoints = createWrapper('wrapper health-wrapper', resourcesGridWrapper)
    const willpowerPoints = createWrapper('wrapper willpower-wrapper', resourcesGridWrapper)
    const humanityPoints = createWrapper('wrapper humanity-wrapper', resourcesGridWrapper)
    const featureWrapper = createWrapper('feature-wrapper hidden-content', resourcesGridWrapper)

    const hungerMarks = getResourceList.hunger(actorHunger)
    const healthMarks = getResourceList.heathWillpower(health)
    const willpowerMarks = getResourceList.heathWillpower(willpower)
    const humanityMarks = getResourceList.humanity(humanity)

    const actorDisciplines = Object.fromEntries(Object.entries(disciplines).filter(([, value]) => value.visible))
    const actorPowers = items.filter(item => item.type === 'power')

    Object.keys(actorDisciplines).forEach(discipline => {
      actorDisciplines[discipline].powers = actorPowers.filter(power =>
        actorDisciplines[discipline].name.toLowerCase().includes(power.data.data.discipline)
      )
    })

    /**
     * It takes a string, creates a new DOMParser, parses the string as HTML, and returns the text content
     * of the document element
     * @param input - The string to be decoded.
     * @returns the text content of the document element.
     */
    function htmlDecode(input) {
      const doc = new DOMParser().parseFromString(input, 'text/html')
      return doc.documentElement.textContent
    }

    const touchstonesList = []

    /* Taking the touchstones string and parsing it into an array of objects. */
    htmlDecode(touchstones).replace(/(.+); *(.+)/gm, (match, p1, p2) => {
      const img = game.journal.contents.filter(entry => entry.data.name === p2)[0]?.data.img
      const touchstoneImage = img !== undefined ? img : 'img'
      touchstonesList.push({ conviction: p1, touchstone: p2, touchstoneImage })
    })

    /**
     * It takes an integer and returns an array of objects with the same number of elements as the integer,
     * with each object having an index property and an active property
     * @param abilityValue - The value of the ability score.
     * @returns An array of objects with two properties, index and active.
     */
    function getResourcesActivity(abilityValue) {
      const activityArray = []
      for (let index = 0; index < 5; index++)
        index < abilityValue
          ? activityArray.push({ index, isActive: true })
          : activityArray.push({ index, isActive: false })
      return activityArray.map(({ index, isActive }) => getHtmlElements.resourceMark(index, false, isActive)).join('')
    }

    const getHtmlElements = {
      resourceMark: (index, isHunger = false, isActive = false) => `<style>
          .resource-mark {
            display: inline-block;
            height: 14px;
            width: 14px;
            box-shadow: inset 2px 3px 5px var(--dialog-darkest), 0px 1px 1px var(--dialog-dark);
          }
          .resource-mark[data-hunger='false'] {border-radius: 50%}
          .resource-mark[data-hunger='true'] {
            border-radius: 0% 50% 50% 50%;
            transform: rotate(45deg);
          }
          .resource-mark[data-active='true'] {
            background-color: var(--dialog-red-primary);
          }
        </style><span class='resource-mark' data-index='${index}' data-hunger='${isHunger}' data-active='${isActive}'></span>`,
      statsWrapper: (name, key, index, value, idActor) => `
      <style>
          .stats-resource-wrapper {
                    display: flex;
                    align-items: center;
                    flex-wrap: nowrap;
                    width: 170px;
                  }

                  .stats-resource-wrapper:hover .dice-icon{
                    visibility: visible;
                    opacity:1;
                  }

                  .stats-resource-wrapper:nth-child(3n+2):nth-child(-n+18) {order: 1;}

                  .stats-resource-wrapper:nth-child(3n+1):nth-child(-n+18) {order: 2;}

                  .stats-resource-wrapper:nth-child(3n+3):nth-child(-n+18) {order: 3;}

                  .stats-resource-wrapper:nth-child(n+20) {order: 4;}

                  .stats-resource-wrapper:nth-child(n+14):nth-child(-n+18) { margin-bottom:3px;}

                  .stats-activity {
                    position:relative;
                  }
                  .stats-activity .dice-icon {
                    left:-12px;

                    visibility: hidden;
                    opacity:0;

                    transition:opacity 0.3s ease-in-out;
                  }
      </style>
      <div class="stats-resource-wrapper">
          <span
            for="data.data.abilities.${key}.value"
            class="label-resources resources-placeholder stats-placeholder is-rollable"
            data-id=${idActor}
            data-roll=${value}
            data-label=${game.i18n.localize(key)}>
              ${game.i18n.localize(name)}
          </span>
          <div class="stats-activity" data-value=${index} data-name=${value}>
              ${getResourcesActivity(value)} ${getHtmlElements.iconDice()}
          </div>
      </div>`,
      bloodGift: (placeholder, bloodGift) => `
      <style>
          .blood-gifts-content {
              border-top: 2px solid rgba(58,41,42,0.0);
              background-color: var(--dialog-red-transparent);
            }
            .blood-gifts-label {
              border-top: 2px solid var(--dialog-red-transparent);
              width: 46%;
            }
      </style>
      <div class="label-wrapper">
          <span class="label-resources resources-placeholder blood-gifts-label">${placeholder}</span>
          <span class="label-resources blood-gifts-content">${bloodGift}</span>
      </div>`,
      headerResourcesLabel: resource => `
      <style>
          .header-resources-wrapper {
                align-items:center;
              }
              .header-resources-wrapper i{
                color: var(--dialog-red-primary);
              }

              .hr-content {
                color: var(--dialog-red-primary);
              }
      </style>
      <div class="label-wrapper header-resources-wrapper">
          <span class="label-resources resources-placeholder">${getPlaceholder[resource]}</span>
          <i class="fas fa-caret-right"></i>
          <span class="label-resources hr-content">${headers[resource]}</span>
      </div>`,
      iconDice: (className, title) => `
      <style>
          .dice-icon {
              position:absolute;
              width:20px;
              filter: invert(100%) sepia(30%) saturate(621%) hue-rotate(316deg) brightness(88%) contrast(90%);
              background: var(--dialog-primary-transparent);
              border: 0;
              border-radius: 50%;
            }
      </style>
      <img class="dice-icon ${className}" title="${title}"data-id=${actorId} src="/systems/vtm5e/assets/images/dice.svg"/>`,
      featureDiscipline: () => `
      <style>
    .feature-body-discipline {
        width: 192px;
        overflow-y: auto;
        overflow-x: visible;
    }
    .feature-body-discipline ol {
        width: 170px;
        list-style-type: none;
        margin-left: 6px;
        padding: 0;
        overflow-y:clip;
    }
    .feature-body-discipline li {
        display: grid;
        grid-template-columns: 55% 45%;
        grid-template-areas:
            "discipline level"
            "content content";

        border:1px solid black;

        border: 1px solid var(--dialog-light);
        border-radius: 5px;
        padding: 3px;
        // border-bottom: 1px solid var(--dialog-primary);

        margin-bottom: 5px;

    }

    .discipline-card span {
        font-family: var(--dialog-font-family);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .discipline-name {
        grid-area: discipline;
        width: 90px;
        text-transform: uppercase;
        color: var(--dialog-red-primary);
        font-weight: bold;
        font-size: 12px;
    }
    .discipline-value {
        grid-area: level;
    }
    .discipline-power-content {
        grid-area: content;
        position: relative;
        display: flex;
        flex-direction: column;
        white-space: nowrap;

        max-height: 0;
        opacity: 0;
        visibility: hidden;
        transition: max-height 0.25s ease-out, visibility 0.35s linear, opacity 0.35s linear;
    }
    .power-wrapper {
        overflow: hidden;
        align-items: center;
        padding: 5px;
        min-width: 165px;
        margin-bottom: 5px;
    }
    .power-wrapper .dice-icon {
        filter: invert(14%) sepia(6%) saturate(172%) hue-rotate(22deg) brightness(91%) contrast(89%);
        right: -10px;
    }
    .power-wrapper .dice-icon:hover {
        box-shadow: 3px 2px 5px var(--dialog-darkest);
        filter: invert(12%) sepia(72%) saturate(3018%) hue-rotate(352deg) brightness(97%) contrast(92%);
    }
    .power-wrapper img {
        position: absolute;
        border-radius: 50%;
        filter: invert(91%) sepia(12%) saturate(150%) hue-rotate(21deg) brightness(90%) contrast(79%);
        box-shadow: 3px 2px 5px var(--dialog-darker);
        transition: filter 0.3s ease-in-out;
        transition: box-shadow 0.3s ease-in-out;
        width: 20px;
        cursor: pointer;
        background: transparent;
        border: none;
    }
    .discipline-image {
        left: -10px;
    }
    .discipline-info {
      position: relative;
      display: flex;
      align-items: center;
      flex-direction: column;
      width: 143px;
      margin-left:5px;

      overflow: hidden;

      transition: all .2s;
      border-radius: 6px;
    }

    .discipline-info:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
     }
     .discipline-info:active {
      transform: translateY(-1px);
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
     }

     .discipline-info::after {
      content: "";
      display: inline-block;
      height: 100%;
      width: 100%;
      border-radius: 100px;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      transition: all .4s;
     }

     .discipline-info:hover::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
     }

    .discipline-info span{
      font-size: 10px;

      // display: flex;
      // justify-content: center;
      // white-space: nowrap;
    }
    .power-name {
      width: 143px;
      padding-left: 5px;

      // display: flex;
      // align-items: center;
      // justify-content: center;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: bold;
    }
    .collapsible {
        cursor: pointer;
    }
</style>
<div class="feature-body-discipline">
    <ol>
        ${Object.keys(actorDisciplines)
          .map(discipline => {
            const { name: disciplineName, powers, value } = actorDisciplines[discipline]
            const localizeName = game.i18n.localize(disciplineName)
            return `
        <li class="discipline-card">
            <span class="discipline-name collapsible" title="${localizeName}">${localizeName}</span>
            <div class="discipline-value">${getResourcesActivity(value)}</div>
            <!-- Empty box (for setting back to 0), and then iterate through the rest of the discipline dots -->
            <div class="discipline-power-content">
                ${powers
                  .map(power => {
                    const {
                      id,
                      img,
                      data: {
                        name: powerName,
                        data: { rollable, level, dice1, dice2 }
                      }
                    } = power
                    return `
                <div class="power-wrapper">
                    <img class="discipline-image" src="${img}" title="${powerName}" alt="${powerName}" data-character-id="${actorId}" data-id="${id}" />
                    ${getHtmlElements.iconDice()}
                    <!-- Discipline power information -->
                    <div class="discipline-info"><span class="power-name" power-level="${level}">${powerName}</span> ${
                      rollable ? `<span>${dice1} + ${dice2}</span>` : ``
                    }</div>
                </div>
                `
                  })
                  .join('')}
            </div>
        </li>
        `
          })
          .join('')}
    </ol>
</div>
`
    }

    const getTooltip = {
      bloodPotency: `
      <style>

      </style>
      <div class="tooltip blood-potency" data="${bloodPotencyValue}">
          <i class="bi bi-droplet-fill bi-tooltip"></i>
          <span class="tooltip-hide-content tooltip-label">${getPlaceholder.bloodPotency}</span>
          <div class="wrapper-dialog tooltip-hide-content blood-potency-hide-content">
              ${getHtmlElements.bloodGift(getPlaceholder.bloodSurge, bloodPotency.surge)}
              ${getHtmlElements.bloodGift(getPlaceholder.powerBonus, bloodPotency.power)}
              ${getHtmlElements.bloodGift(getPlaceholder.FeedingPenalty, bloodPotency.feeding)}
              ${getHtmlElements.bloodGift(getPlaceholder.MendAmount, bloodPotency.mend)}
              ${getHtmlElements.bloodGift(getPlaceholder.RouseReRoll, bloodPotency.rouse)}
              ${getHtmlElements.bloodGift(getPlaceholder.BaneSeverity, bloodPotency.bane)}
          </div>
      </div>`,
      stats: `
      <style>
      .stats-hide-content {
        overflow-x: scroll;
        display:flex;
        flex-wrap: wrap;
        align-content: space-between;
        height: 206px;
        width: 355px;
        flex-direction:column;
        border-top:2px solid var(--dialog-red-primary);
        background-color: var(--dialog-red-transparent);
      }

      .tooltip-stats {left: 24px}

        .temp-show {
          visibility: visible;
          opacity:1;
        }

      </style>
      <div class="tooltip tooltip-stats">
          <i id="image" class="bi bi-bookmarks-fill bi-tooltip"></i>
          <span class="tooltip-hide-content tooltip-label">${getPlaceholder.attributes} & ${
        getPlaceholder.skills
      }</span>
          <div class="wrapper-dialog tooltip-hide-content stats-hide-content">
                ${Object.keys(abilities)
                  .map((key, index) => {
                    const { value: abilityValue, name } = abilities[key]
                    return getHtmlElements.statsWrapper(name, key, index, abilityValue, actorId)
                  })
                  .join('')}
                ${Object.keys(skills)
                  .filter(key => skills[key].value > 0)
                  .map((key, index) => {
                    const { value: skillValue, name } = skills[key]
                    return getHtmlElements.statsWrapper(name, key, index, skillValue, actorId)
                  })
                  .join('')}
          </div>
      </div>
      `,
      touchstones: `
      <div class="tooltip touchstones">
          <i class="bi bi-people-fill bi-tooltip"></i>
          <span class="tooltip-hide-content tooltip-label">${getPlaceholder.touchstonesAndConvictions}</span>
          <div class="wrapper-dialog tooltip-hide-content touchstones-body">
              ${touchstonesList
                .map(
                  tsConvic => `
              <div class="touchstones-content">
                  ${
                    tsConvic.touchstoneImage !== 'img'
                      ? `<img class="image ts-convic-image" src=${tsConvic.touchstoneImage}/>`
                      : `<i class="bi bi-person-bounding-box"></i>`
                  }
                  <span class="label-resources resources-placeholder blood-gifts-label ts-name">${
                    tsConvic.touchstone
                  }</span>
              </div>
              <span class="ts-convic-conviction">"${tsConvic.conviction}"</span>`
                )
                .join('')}
          </div>
      </div>`
    }

    const getResourcesInnerHtml = (
      className,
      placeholder,
      classState,
      dataValue,
      dataMax,
      dataStains,
      dataSuperficial,
      dataAggravated,
      dataName,
      resourceMarks,
      title,
      clickable = 'is-clickable'
    ) => `<style>
    .resources-label {
      text-transform: uppercase;
      margin: 2px 0px;
      whidth: 100%;
      color: var(--dialog-red-primary);
      padding: 2px;

      font-family: var(--dialog-font-family);
      font-weight:bold;
      font-size:12px;
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
      background-color: black;
    }

    .resources-counter .resources-counter-step[data-state="/"] {
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
    </style><div class="flexrow">
      <label class="wrapper-dialog resources-label ${clickable} ${className}" title="${title}"0 data-id="${actorId}">${placeholder}</label>
    </div>
    <div class="resources-counter" data-states=${classState} data-value=${dataValue} data-max="${dataMax}" data-stains="${dataStains}" data-superficial="${dataSuperficial}" data-aggravated="${dataAggravated}" data-name=${dataName}>
      ${resourceMarks.map(
        mark => `
        <span class="resources-counter-step" data-index=${mark.dataIndex} data-state=${mark.dataState}></span>`
      )}
    </div>
    `

    headerWrapper.innerHTML += `
    <style>
    hunger-wrapper {
      position:relative;
      width:90px;
      margin-bottom: 5px;
      color: transparent;
    }

    .hunger-wrapper img {
      /* color of svg: */
      filter: invert(91%) sepia(12%) saturate(150%) hue-rotate(21deg) brightness(90%) contrast(79%);
      box-shadow: 3px 2px 5px var(--dialog-darker);

      transition:filter 0.3s ease-in-out;
      transition:box-shadow 0.3s ease-in-out;

      width:22px;
      cursor:pointer;
      background: transparent;

      bottom: 1px;
      left: 90px;
    }

    .header-Wrapper-content {
      display: flex;
      position:relative;
      flex-direction: column;
      width: 100%;
    }

    .actor-name {
      color: black;
      padding-left: 3px;
      margin:0;
    }

    .hunger-wrapper img:hover {
      filter: invert(12%) sepia(72%) saturate(3018%) hue-rotate(352deg) brightness(97%) contrast(92%);
      box-shadow: 3px 2px 5px var(--dialog-darkest);
    }
    </style>
    <div class="tooltip-image-wrapper">
      <div class="tooltips-wrapper">${getTooltip.bloodPotency} ${getTooltip.stats} ${getTooltip.touchstones}</div>
      <img class="image actor-image" src=${actorImg} alt="img" />
    </div>
    <div class="header-Wrapper-content">
      <a class="open-sheet is-clickable">
        <p>Abrir Ficha</p>
        <i class="bi bi-file-earmark-text-fill open-sheet-icon" data-id=${actorId}></i>
      </a>
      <div class="wrapper-dialog">
        <h1 class="label-resources actor-name">${actorName}</h1>
        ${getHtmlElements.headerResourcesLabel('concept', 'false')}
        ${getHtmlElements.headerResourcesLabel('ambition', 'false')}
        ${getHtmlElements.headerResourcesLabel('desire', 'true')}
      </div>
      <div class="hunger-wrapper">
        ${getHtmlElements.iconDice('dice-hunger', getPlaceholder.rouse)}
        ${hungerMarks
          .map(({ dataIndex, dataState }) => getHtmlElements.resourceMark(dataIndex, true, dataState))
          .join(' ')}</div>
    </div>`

    healthPoints.innerHTML += getResourcesInnerHtml(
      'healthPoints',
      getPlaceholder.health,
      '/:superficial,x:aggravated',
      null,
      health.max,
      null,
      health.superficial,
      health.aggravated,
      'data.health',
      healthMarks,
      getPlaceholder.health,
      ''
    )

    willpowerPoints.innerHTML += getResourcesInnerHtml(
      'willpower-points',
      getPlaceholder.willpower,
      '/:superficial,x:aggravated',
      null,
      willpower.max,
      null,
      willpower.superficial,
      willpower.aggravated,
      'data.willpower',
      willpowerMarks,
      getPlaceholder.frenzy
    )

    humanityPoints.innerHTML += getResourcesInnerHtml(
      'humanity-points',
      getPlaceholder.humanity,
      '/:stains,-:value',
      humanity.value,
      null,
      humanity.stains,
      null,
      null,
      'data.humanity',
      humanityMarks,
      getPlaceholder.remorse
    )

    featureWrapper.innerHTML += `
    <style>
    .feature-header {
      display: flex;
      flex-direction: column;
      align-items:center;
    }

    .feature-header a {
      display:flex;
      width:100%;
      background: var(--dialog-red-primary);;
      justify-content:center;
    }

    .feature-header i {
      color: var(--dialog-light);;
      font-size: 14px;
      cursor: pointer;
    }

    .feature-header h1 {
      color: var(--dialog-red-primary);
      font-weight:bold;
      font-size: 12px;

      margin-top:2px;
      border:0;
    }

    .feature-body {
      display:flex;
      justify-content:space-between;
      overflow:hidden;
    }
    </style>
      <div class="feature-header">
        <a>
        <i class="fas fa-caret-down toggle-arrow"></i>
        </a>
        <h1>${game.i18n.localize('VTM5E.Disciplines')} & ${game.i18n.localize('VTM5E.Features')}</h1>
      </div>
      <div class="feature-body">
        ${getHtmlElements.featureDiscipline()}
        <div class="feature-body-feature">
          <p>feature</p>
        </div>
      </div>
`
  }

  /**
   * It creates a wrapper for the actor's resources and then creates the actor's wrapper
   * @param actor - The actor object that is being created.
   */
  function composeDialog(actor) {
    const resourcesGridWrapper = document.createElement('div')
    resourcesGridWrapper.className = 'resources grid-column'
    resourcesGridWrapper.id = actor.id
    div.appendChild(resourcesGridWrapper)
    createActorWrapper(actor, resourcesGridWrapper)
  }

  /**
   * It loops through all the actors in the game and calls the composeDialog function for each one
   */
  const storytellerDialog = () =>
    game.actors
      .filter(actor => actor.type === 'vampire' || actor.type === 'character')
      .forEach(actor => composeDialog(actor))

  /**
   * It creates a dialog for each actor that is either a vampire or a character and that the current user
   * has permission to control
   */
  const playerDialog = () =>
    game.actors
      .filter(
        actor =>
          (actor.type === 'vampire' || actor.type === 'character') && actor.data.permission[game.userId] !== undefined
      )
      .forEach(actor => composeDialog(actor))

  game.user.isGM ? storytellerDialog() : playerDialog()

  /**
   * It rolls a number of dice, and then displays the results in the chat
   * @param numDice - The number of dice to roll.
   * @param thisActor - The actor that is rolling the dice.
   * @param [label] - The label of the roll.
   * @param [difficulty=0] - The difficulty of the roll. If this is 0, then the roll is assumed to be a
   * rouse check.
   * @param [useHunger=true] - Whether or not to use hunger dice in the roll.
   * @param [increaseHunger=false] - If true, the actor's hunger will increase by 1 on a failure.
   * @param [subtractWillpower=false] - If true, the actor's willpower will be automatically reduced by 1
   * point.
   */
  const _rollDice = async (
    numDice,
    thisActor,
    label = '',
    difficulty = 0,
    useHunger = true,
    increaseHunger = false,
    subtractWillpower = false
  ) => {
    const { data } = thisActor
    const {
      data: { hunger, willpower }
    } = data

    // Define the actor's current hunger
    let hungerDice
    useHunger ? (hungerDice = Math.min(hunger.value, numDice)) : (hungerDice = 0)

    // Roll defining and evaluating
    const dice = numDice - hungerDice
    const roll = new Roll(`${dice}dvcs>5 + ${hungerDice}dhcs>5`, thisActor.data.data)
    await roll.evaluate()

    // Variable defining
    let difficultyResult = '<span></span>'
    let success = 0
    let hungerSuccess = 0
    let critSuccess = 0
    let hungerCritSuccess = 0
    let fail = 0
    let hungerFail = 0
    let hungerCritFail = 0

    // Defines the normal diceroll results
    roll.terms[0].results.forEach(thisDice => {
      if (!thisDice.success) return fail++
      if (thisDice.result === 10) return critSuccess++
      success++
    })

    // Track number of hunger diceroll results
    roll.terms[2].results.forEach(thisDice => {
      if (!thisDice.success && thisDice.result === 1) return hungerCritFail++
      if (!thisDice.success) return hungerFail++
      if (thisDice.result === 10) return hungerCritSuccess++
      hungerSuccess++
    })

    // Success canculating
    let totalCritSuccess = 0
    totalCritSuccess = Math.floor((critSuccess + hungerCritSuccess) / 2)
    const totalSuccess = totalCritSuccess * 2 + success + hungerSuccess + critSuccess + hungerCritSuccess
    let successRoll = false

    // Get the difficulty result
    if (difficulty !== 0) {
      successRoll = totalSuccess >= difficulty
      difficultyResult = `( <span class="danger">${game.i18n.localize('VTM5E.Fail')}</span> )`
      if (successRoll) {
        difficultyResult = `( <span class="success">${game.i18n.localize('VTM5E.Success')}</span> )`
      }
    }

    // Define the contents of the ChatMessage
    let chatMessage = `<p class="roll-label uppercase">${label}</p>`

    // Special critical/bestial failure messages
    ;(() => {
      if (hungerCritFail && !successRoll && difficulty === 0)
        return (chatMessage += `<p class="roll-content result-bestial result-possible">${game.i18n.localize(
          'VTM5E.PossibleBestialFailure'
        )}</p>`)

      if (hungerCritFail && !successRoll && difficulty > 0)
        return (chatMessage += `<p class="roll-content result-bestial">${game.i18n.localize(
          'VTM5E.BestialFailure'
        )}</p>`)

      if (!(hungerCritSuccess && totalCritSuccess) && totalCritSuccess)
        return (chatMessage += `<p class="roll-content result-critical">${game.i18n.localize(
          'VTM5E.CriticalSuccess'
        )}</p>`)

      if (hungerCritSuccess && totalCritSuccess)
        chatMessage += `<p class="roll-content result-critical result-messy">${game.i18n.localize(
          'VTM5E.MessyCritical'
        )}</p>`
    })()

    // Total number of successes
    chatMessage += `<p class="roll-label result-success">${game.i18n.localize(
      'VTM5E.Successes'
    )}: ${totalSuccess} ${difficultyResult}</p>`

    // Run through displaying the normal dice

    function displayDice(interator, diceImg, htmlAlt, diceType) {
      for (let i = 0, j = interator; i < j; i++) {
        chatMessage += `<img src="systems/vtm5e/assets/images/${diceImg}.png" alt=${htmlAlt} class="roll-img ${diceType}" />`
      }
    }
    displayDice(critSuccess, 'normal-crit', 'normal Crit', 'normal-dice')
    displayDice(success, 'normal-success', 'normal Success', 'normal-dice')
    displayDice(fail, 'normal-fail', 'normal Fail', 'normal-dice')

    // Separator
    chatMessage += '<br>'

    // Run through displaying hunger dice
    displayDice(hungerCritSuccess, 'red-crit', 'Hunger Cri', 'hunger-dice')
    displayDice(hungerSuccess, 'red-success', 'Hunger Success', 'hunger-dice')
    displayDice(hungerCritFail, 'bestial-fail', 'Bestial Fail', 'hunger-dice')
    displayDice(hungerFail, 'red-fail', 'Hunger Fail', 'hunger-dice')

    // Post the message to the chat
    roll.toMessage({
      speaker: ChatMessage.getSpeaker({ thisActor }),
      content: chatMessage
    })
    // Automatically add hunger to the actor on a failure (for rouse checks)
    if (increaseHunger && game.settings.get('vtm5e', 'automatedRouse')) {
      // Check if the roll failed (matters for discipline
      // power-based rouse checks that roll 2 dice instead of 1)
      if ((difficulty === 0 && totalSuccess === 0) || totalSuccess < difficulty) {
        const actorHunger = hunger.value

        // If hunger is greater than 4 (5, or somehow higher)
        // then display that in the chat and don't increase hunger
        if (actorHunger > 4) {
          roll.toMessage({
            speaker: ChatMessage.getSpeaker({ thisActor }),
            content: game.i18n.localize('VTM5E.HungerFull')
          })
        } else {
          // Define the new number of hunger points
          const newHunger = hunger.value + 1

          // Push it to the actor's sheet
          thisActor.update({ 'data.hunger.value': newHunger })
        }
      }
    }

    // Automatically track willpower damage as a result of willpower rerolls
    ;(() => {
      if (subtractWillpower && game.settings.get('vtm5e', 'automatedWillpower')) {
        // Get the actor's willpower and define it for convenience
        const actorWillpower = willpower
        const maxWillpower = actorWillpower.max
        const aggrWillpower = actorWillpower.aggravated
        const superWillpower = actorWillpower.superficial
        // If the willpower boxes are fully ticked with aggravated damage
        // then tell the chat and don't increase any values.
        if (aggrWillpower >= maxWillpower)
          return roll.toMessage({
            speaker: ChatMessage.getSpeaker({ actor }),
            content: game.i18n.localize('VTM5E.WillpowerFull')
          })
        if (superWillpower + aggrWillpower < maxWillpower) {
          // If there are still superficial willpower boxes to tick, add it here

          // Define the new number of superficial willpower damage
          const newWillpower = superWillpower + 1

          // Update the actor sheet
          actor.update({ 'data.willpower.superficial': newWillpower })
          return
        }
        // If there aren't any superficial boxes left, add an aggravated one

        // Define the new number of aggravated willpower damage
        // Superficial damage needs to be subtracted by 1 each time
        // a point of aggravated is added
        const newSuperWillpower = superWillpower - 1
        const newAggrWillpower = aggrWillpower + 1

        // Update the actor sheet
        actor.update({ 'data.willpower.superficial': newSuperWillpower })
        actor.update({ 'data.willpower.aggravated': newAggrWillpower })
      }
    })()
  }

  const getActorOnEvent = event => {
    const {
      dataset: { id }
    } = event.currentTarget

    return game.actors.find(act => act.id === id)
  }

  /* Creating a new object called _onClick. This object has two properties, onOpenScheet and
onRollDialog. Each property has a function assigned to it. */
  _onClick = {
    /* A function that is called when the sheet is opened. It is getting the actor on the event and
    then rendering the sheet. */
    onOpenScheet: event => getActorOnEvent(event).sheet.render(true),
    /* Creating a dialog box that allows the user to select an ability and then roll the dice. */
    onOpenItem: event => {
      const {
        dataset: { id, characterId }
      } = event.currentTarget
      game.actors
        .find(act => act.id === characterId)
        .items.find(item => item.id === id)
        .sheet.render(true)
    },
    onRollDialog: event => {
      event.preventDefault()
      let options = ''
      const { dataset } = event.currentTarget
      const actor = getActorOnEvent(event)
      const {
        data: {
          data: { abilities }
        }
      } = actor

      for (const [key, value] of Object.entries(abilities)) {
        options = options.concat(`<option value="${key}">${game.i18n.localize(value.name)}</option>`)
      }

      const template = `
        <form>
            <div class="form-group">
                <label>${game.i18n.localize('VTM5E.SelectAbility')}</label>
                <select id="abilitySelect">${options}</select>
            </div>
            <div class="form-group">
                <label>${game.i18n.localize('VTM5E.Modifier')}</label>
                <input type="text" id="inputMod" value="0">
            </div>
            <div class="form-group">
                <label>${game.i18n.localize('VTM5E.Difficulty')}</label>
                <input type="text" min="0" id="inputDif" value="0">
            </div>
        </form>`

      let buttons = {}
      buttons = {
        draw: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize('VTM5E.Roll'),
          callback: async html => {
            const ability = html.find('#abilitySelect')[0].value
            const modifier = parseInt(html.find('#inputMod')[0].value || 0, 10)
            const difficulty = parseInt(html.find('#inputDif')[0].value || 0, 10)
            const abilityVal = abilities[ability].value
            const abilityName = game.i18n.localize(abilities[ability].name)
            const numDice = abilityVal + parseInt(dataset.roll, 10) + modifier

            _rollDice(numDice, actor, `${dataset.label} + ${abilityName}`, difficulty, true)
            // this._vampireRoll(numDice, this.actor, `${dataset.label} + ${abilityName}`, difficulty)
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize('VTM5E.Cancel')
        }
      }

      new Dialog({
        title: `${game.i18n.localize('VTM5E.Rolling')} ${dataset.label}...`,
        content: template,
        buttons,
        default: 'draw'
      }).render(true)
    },
    /* Creating a new button in the Actor sheet that will roll a Hunger check. */
    onRollHunger: event => {
      event.preventDefault()
      const actor = getActorOnEvent(event)
      // _rollDice (numDice, thisActor, label = '', difficulty = 0, useHunger = true,increaseHunger = false,subtractWillpower = false)
      _rollDice(1, actor, game.i18n.localize('VTM5E.Rouse'), 1, true, true)
    },
    onRollFrenzy: event => {
      event.preventDefault()
      const actor = getActorOnEvent(event)
      const {
        data: {
          data: { willpower, humanity }
        }
      } = actor
      const { aggravated, max, superficial } = willpower
      const { value } = humanity

      const actualWillpower = max - aggravated - superficial
      const humanityMod = Math.floor(value / 3)

      const template = `
      <form>
          <div class="form-group">
              <label>${game.i18n.localize('VTM5E.Modifier')}</label>
              <input type="text" id="inputMod" value="0">
          </div>
          <div class="form-group">
              <label>${game.i18n.localize('VTM5E.Difficulty')}</label>
              <input type="text" min="0" id="inputDif" value="0">
          </div>
      </form>`

      let buttons = {}
      buttons = {
        draw: {
          icon: '<i class="fas fa-check"></i>',
          label: game.i18n.localize('VTM5E.Roll'),
          callback: async html => {
            const modifier = parseInt(html.find('#inputMod')[0].value || 0, 10)
            const difficulty = parseInt(html.find('#inputDif')[0].value || 0, 10)

            const numDice = actualWillpower + humanityMod + modifier

            _rollDice(numDice, actor, game.i18n.localize('VTM5E.ResistingFrenzy'), difficulty, false)
            // this._vampireRoll(numDice, this.actor, `${dataset.label} + ${abilityName}`, difficulty)
          }
        },
        cancel: {
          icon: '<i class="fas fa-times"></i>',
          label: game.i18n.localize('VTM5E.Cancel')
        }
      }

      new Dialog({
        title: getPlaceholder.frenzy,
        content: template,
        buttons,
        default: 'draw'
      }).render(true)

      // força de vontade + 1/3 da humanidade
      // _rollDice (numDice, thisActor, label = '', difficulty = 0, useHunger = true,increaseHunger = false,subtractWillpower = false)
      // _rollDice(1, actor, game.i18n.localize('VTM5E.Rouse'), 1, true, true)
    },
    onRollRemorse: event => {
      event.preventDefault()
      const actor = getActorOnEvent(event)

      // dados iguais a humanidade não marcada: if sucesso remove all Stains / if frasso -1 de humanidade remove all stains
      // _rollDice (numDice, thisActor, label = '', difficulty = 0, useHunger = true,increaseHunger = false,subtractWillpower = false)
      // _rollDice(1, actor, game.i18n.localize('VTM5E.Rouse'), 1, true, true)
    },
    onFeatureShowContent: event => {
      const featureWrapper = event.currentTarget.parentNode
      featureWrapper.classList.toggle('show-content')
    },
    onCollapsibleShowContent: event => {
      const content = event.currentTarget
      const hiddenContent = $(content).closest('span').nextAll('.discipline-power-content')[0]
      // hiddenContent.classList.toggle('show-content')
      function toggleVisibility(maxHeight, visibility, opacity, transition) {
        hiddenContent.style.maxHeight = maxHeight
        hiddenContent.style.visibility = visibility
        hiddenContent.style.opacity = opacity
        hiddenContent.style.transition = transition
      }

      if (hiddenContent.style.visibility === 'visible')
        return toggleVisibility('0', 'hidden', 0, 'visibility 0.15 ease-in, max-height 0.25s ease-in')
      toggleVisibility('1000px', 'visible', 1, 'visibility 0.15 ease-out, max-height 0.25s ease-out')
    }
  }

  const content = `
  <style>
  :root {
    --dialog-font-family: 'Playfair Display', serif !important;

    --dialog-primary: rgb(224, 221, 212);
    --dialog-primary-transparent: rgba(224, 221, 212,0.8);
    --dialog-red-primary: #790813;
    --dialog-red-transparent: rgba(58,41,42,0.8);
    --dialog-darkest: #000;
    --dialog-darker:#444;
    --dialog-dark:#888;
    --dialog-light: #ccc;
  }

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
    box-shadow: inset 2px 3px 5px var(--dialog-darkest), 0px 2px 2px var(--dialog-light);
    background-color: var(--dialog-red-primary);
    border-radius:10px 0 0 10px;
  }

  .tooltip {
    border-radius:100%;
    position: absolute;

    top: 2px;
  }

  .tooltip-hide-content {
    z-index:1000;
    visibility: hidden;
    opacity:0;
    width: 300px;
    margin-top: 5px;
    box-shadow: 4px 4px 5px var(--dialog-dark);

    transition:opacity 0.3s ease-in, visibility 0.3s ease-in;

  /* Position the tooltip */
    position: absolute;
    top: 11px;
  }

  .tooltip:hover .tooltip-hide-content {
    visibility: visible;
    opacity:1;

    transition:opacity 0.14s ease-out, visibility 0.14s ease-out;
  }

  .tooltip-label {
    display:flex;
    justify-content:center;
    width:175px;
    font-size: 12px;
    font-weight:bold;
    color: var(--dialog-primary);
    background-color:var(--dialog-red-primary);
    padding: 2px 5px;
    border-radius:5px 5px 0 0;
    top: -6px;
    left:50px;
  }

  .touchstones-body {
    background-color: var(--dialog-primary-transparent);
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
    color: var(--dialog-red-primary);
    font-size: 12px;
    font-weight: bold;
    left: 3.2px;
    top: 2px;
    pointer-events: none;
  }
  .blood-potency-hide-content {
    border-top:2px solid var(--dialog-red-primary);
  }
  .blood-potency:hover::after {
    color: var(--dialog-primary);
  }

  .touchstones {
    left: 7px;
  }

  .bi-tooltip {
    color:var(--dialog-primary);
    cursor: pointer;
  }

  .bi-tooltip:hover {
    color: white;
  }

  .bi-person-bounding-box{
    font-size:50px;
    position: absolute;
    right: -25px;
    top: -18px;
    color:var(--dialog-red-primary);
    background-color: var(--dialog-primary-transparent);
    border-radius:6px;
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

  .hidden-content {
    display: flex;
    flex-direction: column;
    white-space: nowrap;

    max-height: 2px;
    transition: max-height 0.25s ease-in;
  }

  .show-content {
    max-height: 250px;
    opacity: 1;
    visibility: visible;
    transition: max-height 0.25s ease-out, visibility 0.35s linear, opacity 0.35s linear;
  }

  .grid-column .feature-wrapper{
    grid-column: feature;
    border-bottom: 3px solid var(--dialog-red-primary);
    border-radius: 0 0 12px 12px;
    min-height:13px;

    overflow: hidden;
  }

  .blood-label {
    width: 80px;
    font-size: 9px;
    align-items: center;
    font-weight: bold;
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
    color: var(--dialog-primary);
  }

  .resources-placeholder {
    background:var(--dialog-red-primary);
    width: 30%;
  }

  .break {
    flex-basis: 100%;
    height: 0;
  }

  .resources-placeholder[end="true"] {
    border-radius: 0 0 0 12%;
  }

  .ts-name {
    border-top: 0;
    width: 100%;
  }

  .grid-column {
    border-bottom: 2px solid var(--dialog-light);
    margin-bottom: 5px;
    display: grid;
    grid-template-areas: "header header header"
                      "health willpower humanity"
                      "feature feature feature";
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
    font-family: var(--dialog-font-family);
    font-weight: bold;
    font-size: 24px;
    color: var(--dialog-red-primary);
  }

  .image {
    width: 50px;
    margin-right: 15px;
    border: 0;
  }

  .wrapper-dialog {
    border-bottom: 2px solid var(--dialog-red-primary);
    border-left: 2px solid var(--dialog-red-primary);
    border-radius: 0 0 0 10px;
    margin-bottom: 7px;
  }

  .open-sheet {
    position:absolute;
    display:flex;
    justify-content: center;
    align-items:center;

    top:-5px;
    right:0;
  }
  .open-sheet i {
    color: black;
    margin-left:4px;
  }

  .open-sheet p {
    visibility: hidden;
    opacity:0;
    transition:opacity 0.3s ease-in-out;

    font-family: var(--dialog-font-family);
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    color: var(--dialog-primary);
  }

  .open-sheet:hover i{
    color: var(--dialog-primary);
  }

  .open-sheet:hover p{
    visibility: visible;
    opacity:1;
  }

  .stats-placeholder {
    justify-content:center;
    border-top: 2px solid var(--dialog-red-transparent);
    padding-left:2px;
    margin-right:3px;
    width:53%;
  }

  .is-rollable:hover {
    color: var(--dialog-light);
    text-shadow: 0 0 10px white;
    cursor: pointer;
  }

  .is-clickable {
    cursor:pointer;
    transition:text-shadow 0.2s ease-in, color 0.2s ease-in;
  }

  .is-clickable:hover {
    color: var(--dialog-primary);
    text-shadow: 0 0 8px var(--dialog-red-primary);
    transition: color 0.2s ease-out, text-shadow 0.2s ease-out;
  }
  </style>
  <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <script>
      document.getElementById('monitor-container').appendChild(div);

      $('.tooltip-stats').hover(function(){
        var hideStats = $(this).find(".stats-hide-content")[0]; // to fetch current current stats-hide-content
        hideStats.addEventListener("wheel", (evt) => {
          evt.preventDefault();
          hideStats.scrollLeft += evt.deltaY;
        });
      })

      $('.collapsible').click(() => _onClick.onCollapsibleShowContent(event))
      $('.feature-header').click(() => _onClick.onFeatureShowContent(event))
      $('.discipline-image').click(() => _onClick.onOpenItem(event))
      $('.open-sheet-icon').click(() => _onClick.onOpenScheet(event))
      $('.stats-placeholder').click(()=> _onClick.onRollDialog(event))
      $('.dice-hunger').click(() => _onClick.onRollHunger(event))
      $('.willpower-points').click(()=> _onClick.onRollFrenzy(event))
      $('.humanity-points').click(()=> _onClick.onRollRemorse(event))

    </script>
  </head>
  <h1 class="header-label">Characters Monitor</h1>
  <body id="body" class="body-monitor">
      <div id="monitor-container" class="body-fields"></div>
  </body>
  `
  const dialog = new Dialog({
    allowMaximize: true,
    width: 600,
    title: 'Monitor',
    content,
    buttons: {}
  })

  const conteiner = document.getElementById('monitor-container')

  if (!conteiner) dialog.render(true)

  // onUpdateActor(actor, updateData, options, userId)
  Hooks.on('updateActor', actor => {
    const dialogElement = document.getElementById(actor.id)

    dialogElement.innerHTML = ''

    createActorWrapper(actor, dialogElement)

    const willpowerPoints = dialogElement.getElementsByClassName('willpower-points')[0]
    const humanityPoints = dialogElement.getElementsByClassName('humanity-points')[0]
    const tooltipStats = dialogElement.getElementsByClassName('tooltip-stats')[0]
    const featureHeader = dialogElement.getElementsByClassName('feature-header')[0]
    const openSheetIcon = dialogElement.getElementsByClassName('open-sheet-icon')[0]
    const statsPlaceholder = dialogElement.getElementsByClassName('stats-placeholder')[0]
    const diceHunger = dialogElement.getElementsByClassName('dice-hunger')[0]

    tooltipStats.onhover = () => {
      const hideStats = $(this).find('.stats-hide-content')[0]
      hideStats.addEventListener('wheel', evt => {
        evt.preventDefault()
        hideStats.scrollLeft += evt.deltaY
      })
    }
    ;[...dialogElement.getElementsByClassName('collapsible')].forEach(
      collapsible => (collapsible.onclick = event => _onClick.onCollapsibleShowContent(event))
    )
    ;[...dialogElement.getElementsByClassName('discipline-image')].forEach(
      disciplineImage => (disciplineImage.onclick = event => _onClick.onOpenItem(event))
    )

    willpowerPoints.onclick = event => _onClick.onRollFrenzy(event)
    humanityPoints.onclick = event => _onClick.onRollRemorse(event)
    featureHeader.onclick = event => _onClick.onFeatureShowContent(event)
    openSheetIcon.onclick = event => _onClick.onOpenScheet(event)
    statsPlaceholder.onclick = event => _onClick.onRollDialog(event)
    diceHunger.onclick = event => _onClick.onRollHunger(event)
  })
}
