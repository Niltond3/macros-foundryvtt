main()

async function main() {
  div = document.createElement('div')

  const getLanguage = {
    ambition: game.i18n.localize('VTM5E.Ambition'),
    attributes: game.i18n.localize('VTM5E.Attributes'),
    baneSeverity: game.i18n.localize('VTM5E.BaneSeverity'),
    bloodPotency: game.i18n.localize('VTM5E.BloodPotency'),
    bloodSurge: game.i18n.localize('VTM5E.BloodSurge'),
    concept: game.i18n.localize('VTM5E.Concept'),
    desire: game.i18n.localize('VTM5E.Desire'),
    disciplines: game.i18n.localize('VTM5E.Disciplines'),
    exp: game.i18n.localize('VTM5E.Exp'),
    features: game.i18n.localize('VTM5E.Features'),
    FeedingPenalty: game.i18n.localize('VTM5E.FeedingPenalty'),
    frenzy: game.i18n.localize('VTM5E.Frenzy'),
    health: game.i18n.localize('VTM5E.Health'),
    humanity: game.i18n.localize('VTM5E.Humanity'),
    hunger: game.i18n.localize('VTM5E.Hunger'),
    hunting: game.i18n.lang === 'en' ? 'Hunting' : 'Caça',
    intelligence: game.i18n.localize('VTM5E.Intelligence'),
    manipulation: game.i18n.localize('VTM5E.Manipulation'),
    mendAmount: game.i18n.localize('VTM5E.MendAmount'),
    openSheet: game.i18n.lang === 'en' ? 'Open Sheet' : 'Abrir Ficha',
    powerBonus: game.i18n.localize('VTM5E.PowerBonus'),
    predator: game.i18n.localize('VTM5E.Predator'),
    remorse: game.i18n.localize('VTM5E.RollRemorse'),
    resolve: game.i18n.localize('VTM5E.Resolve'),
    roll: game.i18n.localize('VTM5E.Roll'),
    rollFrenzy: game.i18n.localize('VTM5E.RollFrenzy'),
    rollHunting: game.i18n.lang === 'en' ? 'Roll Hunting Check' : 'Rolar teste de caça',
    rollWillpower: game.i18n.localize('VTM5E.RollWillpower'),
    rouse: game.i18n.localize('VTM5E.RollRouse'),
    rouseReRoll: game.i18n.localize('VTM5E.RouseReRoll'),
    skills: game.i18n.localize('VTM5E.Skills'),
    touchstonesAndConvictions: game.i18n.localize('VTM5E.TouchstonesAndConvictions'),
    willpower: game.i18n.localize('VTM5E.Willpower'),
    rollingRemorse: game.i18n.localize('VTM5E.RollingRemorse'),
    resistingFrenzy: game.i18n.localize('VTM5E.ResistingFrenzy'),
    rollingWillpower: game.i18n.localize('VTM5E.RollingWillpower'),
    rolling: game.i18n.localize('VTM5E.Rolling'),
    cancel: game.i18n.localize('VTM5E.Cancel'),
    difficulty: game.i18n.localize('VTM5E.Difficulty'),
    selectAbility: game.i18n.localize('VTM5E.SelectAbility'),
    selectSkill: game.i18n.lang === 'en' ? 'Select Skill' : 'Escolher Habilidade',
    modifier: game.i18n.localize('VTM5E.Modifier'),
    merit: game.i18n.localize('VTM5E.Merit'),
    flaw: game.i18n.localize('VTM5E.Flaw'),
    background: game.i18n.localize('VTM5E.Background'),
    abilities: game.i18n.localize('VTM5E.Abilities')
  }

  function getBloodPotency(level) {
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
    const BLOOD_POTENCY_VALUE = [
      {
        surge: 1,
        power: 0,
        rouse: 0
      },
      {
        surge: 2,
        power: 0,
        rouse: 1
      },
      {
        surge: 2,
        power: 1,
        rouse: 1
      },
      {
        surge: 3,
        power: 1,
        rouse: 2
      },
      {
        surge: 3,
        power: 2,
        rouse: 2
      },
      {
        surge: 4,
        power: 2,
        rouse: 3
      },
      {
        surge: 4,
        power: 3,
        rouse: 3
      },
      {
        surge: 5,
        power: 3,
        rouse: 4
      },
      {
        surge: 5,
        power: 4,
        rouse: 4
      },
      {
        surge: 6,
        power: 4,
        rouse: 5
      },
      {
        surge: 6,
        power: 5,
        rouse: 5
      }
    ]

    return {
      text: BLOOD_POTENCY_TEXT[level],
      value: BLOOD_POTENCY_VALUE[level]
    }
  }

  window._handleMouseEvents = event => {
    const { currentTarget } = event

    const { dataset, parentNode } = currentTarget

    if (dataset.id) {
      const actor = game.actors.find(act => act.id === dataset.id)
      const { items } = actor.data
      const {
        exp,
        abilities,
        skills,
        hunger: { value: hungerValue },
        willpower: { aggravated, max, superficial },
        humanity: { value: humanityValue, stains },
        blood: { potency },
        headers: { predator }
      } = actor.data.data

      const { power, surge } = getBloodPotency(potency).value

      const _rollDice = async (
        numDice,
        label = '',
        difficulty = 0,
        useHunger = true,
        increaseHunger = false,
        subtractWillpower = false,
        changeHumanity = false
      ) => {
        // Define the actor's current hunger
        let hungerDice
        useHunger ? (hungerDice = Math.min(hungerValue, numDice)) : (hungerDice = 0)

        // Roll defining and evaluating
        const dice = numDice - hungerDice
        const roll = new Roll(`${dice}dvcs>5 + ${hungerDice}dhcs>5`, actor.data.data)
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

        // Defines the normal dice roll results
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

        // Success calculating
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
        function displayDice(iterator, diceImg, htmlAlt, diceType) {
          for (let i = 0, j = iterator; i < j; i++) {
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
          speaker: ChatMessage.getSpeaker({ actor }),
          content: chatMessage
        })
        // Automatically add hunger to the actor on a failure (for rouse checks)
        if (increaseHunger && game.settings.get('vtm5e', 'automatedRouse')) {
          // Check if the roll failed (matters for discipline
          // power-based rouse checks that roll 2 dice instead of 1)
          if ((difficulty === 0 && totalSuccess === 0) || totalSuccess < difficulty) {
            // If hunger is greater than 4 (5, or somehow higher)
            // then display that in the chat and don't increase hunger
            if (hungerValue > 4) {
              roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor }),
                content: game.i18n.localize('VTM5E.HungerFull')
              })
            } else {
              // Define the new number of hunger points
              const newHunger = hungerValue + 1

              // Push it to the actor's sheet
              actor.update({ 'data.hunger.value': newHunger })
            }
          }
        }

        if (changeHumanity) {
          if (totalSuccess >= difficulty) return actor.update({ 'data.humanity.stains': 0 })
          const newHumanity = humanity.value - 1
          actor.update({ 'data.humanity.stains': 0 })
          actor.update({ 'data.humanity.value': newHumanity })
        }

        // Automatically track willpower damage as a result of willpower rerolls
        ;(() => {
          if (subtractWillpower && game.settings.get('vtm5e', 'automatedWillpower')) {
            // If the willpower boxes are fully ticked with aggravated damage
            // then tell the chat and don't increase any values.
            if (aggravated >= max)
              return roll.toMessage({
                speaker: ChatMessage.getSpeaker({ actor }),
                content: game.i18n.localize('VTM5E.WillpowerFull')
              })
            if (superficial + aggravated < max) {
              // If there are still superficial willpower boxes to tick, add it here

              // Define the new number of superficial willpower damage
              const newWillpower = superficial + 1

              // Update the actor sheet
              actor.update({ 'data.willpower.superficial': newWillpower })
              return
            }
            // If there aren't any superficial boxes left, add an aggravated one

            // Define the new number of aggravated willpower damage
            // Superficial damage needs to be subtracted by 1 each time
            // a point of aggravated is added
            const newSuperWillpower = superficial - 1
            const newAggrWillpower = aggravated + 1

            // Update the actor sheet
            actor.update({ 'data.willpower.superficial': newSuperWillpower })
            actor.update({ 'data.willpower.aggravated': newAggrWillpower })
          }
        })()
      }
      const getSelector = (condition, object, label, selectId, className, objectKey) => {
        let selector = ''
        if (condition) {
          let options = '<option value="">👁</option>'
          for (const [key, value] of Object.entries(object))
            options = options.concat(`<option value="${key}">${game.i18n.localize(value.name)}</option>`)
          selector = `
            <div class="form-group">
              <label>${label}</label>
              <select id="${selectId}" onchange="setRollCircleStep('${selectId}',${className}, ${objectKey})">
                ${options}
              </select>
            </div>
          `
        }

        return selector
      }
      const rollDialog = (
        titleLabel = '',
        callback = {
          header: '',
          formGroups: '',
          onRollCallback: () => ({ rouses: 0, addDices: [], rollLabel: '' })
        },
        rollLabel = { label: '', numDices: 0 },
        isPowerBonus = false,
        isAbilities = false,
        isSkills = false
      ) => {
        const { header, formGroups, onRollCallback } = callback
        const skillsSelector = getSelector(
          isSkills,
          skills,
          getLanguage.selectSkill,
          'skillSelect',
          'roll-skill',
          'skills'
        )
        const abilitiesSelector = getSelector(
          isAbilities,
          abilities,
          getLanguage.selectAbility,
          'abilitySelect',
          'roll-ability',
          'abilities'
        )
        window.getNumMarks = (numLoop, dataState = '-') => {
          const marks = []
          for (let index = 0; index < numLoop; index++) {
            marks.push(htmlElements(actor).DIALOG__RESOURCE_COUNTER_STEP(index, dataState, 'circle'))
          }
          return marks.join('')
        }
        const getRollDices = () => `
            <script>
              $(document).ready(() => {
                const numMarks = getNumMarks(${rollLabel.numDices})
                const rollDicesValue = document.querySelector('#roll-dices-value')
                rollDicesValue.innerHTML = numMarks
              })
            </script>
            <style>
              .wrapper-discipline-roll-dices {
                display: flex;
                transition: all 0.3s ease-in-out;
              }
              .wrapper-discipline-roll-dices div {
                padding: 2px;
                border-radius: 5px;
                min-width: min-content;
                transition: all 0.3s ease-in-out;
              }
            </style>
            <div class="wrapper-discipline-roll-dices">
              ${
                isPowerBonus && power !== 0
                  ? `<div class='title' data-title='${getLanguage.powerBonus}'>${getNumMarks(power)}</div>`
                  : ''
              }
              <div class="title" data-title="${rollLabel.label}" id="roll-dices-value"></div>
              <div class="title" data-title="${getLanguage.bloodSurge}" id="surge-dice-value"></div>
              <div class="title" data-title="${getLanguage.modifier}" id="modifier-dice-value"></div>
            </div>
          `
        getNewNumDices = dices => getNumMarks(rollLabel.numDices + dices)

        setRollCircleStep = (idSelect, className, objectKey) => {
          const getStatValue = key =>
            abilities[key] ? abilities[key] : skills[key] ? skills[key] : { name: '', value: 0 }

          const test = actor.data.data[objectKey]

          console.log(test)

          if ($(`.${className}`)[0] === undefined) {
            const wrapper = document.createElement('div')
            wrapper.className = `${className} title`
            $('.wrapper-discipline-roll-dices').prepend(wrapper)
          }

          const circleWrapper = $(`.${className}`)
          const resourceSelector = document.getElementById(idSelect).value

          const { value, name } = getStatValue(resourceSelector)

          console.log(abilities)
          console.log(skills)
          console.log(items._source.filter(item => item.type === 'feature'))

          circleWrapper.prop('dataset').title = `${game.i18n.localize(name)}`
          circleWrapper.css('margin-right', '5px')

          circleWrapper[0].innerHTML = getNewNumDices(parseInt(value, 10))

          $('.predator-wrapper :radio[name="radio-predator"]:checked')
        }

        const content = `
          <script>
            $(document).ready(() => {
              const inputSurge = $('#inputSurge')
              const inputMod = $('#inputMod')
              const modifierDiceValue = document.getElementById('modifier-dice-value')
              inputSurge.click(() => {
                if (inputSurge.prop('checked')) {
                  document.getElementById('surge-dice-value').innerHTML = getNumMarks(${surge})
                  return
                }
                document.getElementById('surge-dice-value').innerHTML = ''
              })
              selectResourceChange = (event) => {
                const { currentTarget } = event
                const { dataset, parentNode } = currentTarget

                console.log(currentTarget.value)

                console.log(dataset)
              }
              inputMod.on('keyup', () => {
                const value = parseInt(inputMod.prop('value') || 0, 10)
                if (value != 0) {
                  if (value < 0) {
                    modifierDiceValue.innerHTML = getNumMarks(Math.abs(value), ${false})
                    $('#modifier-dice-value .resources-counter-step').addClass('subtract-value')
                    return
                  }
                  modifierDiceValue.innerHTML = getNumMarks(Math.abs(value))
                  return
                }
                modifierDiceValue.innerHTML = ''
              })

              if (${isSkills}) setRollCircleStep('skillSelect', 'dice-skill', skills)
              if (${isAbilities}) setRollCircleStep('abilitySelect', 'dice-ability', abilities)
            })
          </script>
          <form id='roll-dialog'>
            ${header !== undefined ? header : ''}
            <div class="form-group">
              <label>${getLanguage.bloodSurge}?</label>
              <input type="checkbox" id="inputSurge" value="0" />
            </div>
            ${formGroups !== undefined ? formGroups : ''} ${abilitiesSelector} ${skillsSelector}
            <div class="form-group">
              <label>${getLanguage.modifier}</label>
              <input type="text" id="inputMod" value="0" />
            </div>
            <div class="form-group">
              <label>${getLanguage.difficulty}</label>
              <input type="text" min="0" id="inputDif" value="0" />
            </div>
            <div class="form-group" id="form-roll">
              <label>${getLanguage.roll}</label>
              ${getRollDices()}
            </div>
          </form>
        `
        const buttons = {
          draw: {
            icon: '<i class="fas fa-check"></i>',
            label: getLanguage.roll,
            callback: async html => {
              const getHtmlValue = id => html.find(id)[0].value

              const getElement = (condition, id, object) => {
                if (condition) {
                  const value = getHtmlValue(id)
                  if (value === '')
                    return {
                      label: '',
                      value: 0
                    }
                  return {
                    label: ` + ${game.i18n.localize(object[value].name)}`,
                    value: object[value].value
                  }
                }
                return {
                  label: '',
                  value: 0
                }
              }

              const { label: abilityLabel, value: abilityValue } = getElement(isAbilities, '#abilitySelect', abilities)
              const { label: skillLabel, value: skillValue } = getElement(isSkills, '#skillSelect', skills)

              // const modifier = getHtmlValue('#inputMod')
              const difficulty = getHtmlValue('#inputDif')
              const isSurge = html.find('#inputSurge').prop('checked')

              // const surgeDice = isSurge ? surge : 0

              // const numDices = checks => {
              //   let dices = 0
              //   checks.forEach(value => (dices += parseInt(value, 10)))
              //   return dices
              // }

              const { rouses, rollLabel: label } = onRollCallback(html)

              // const numDice = numDices([abilityValue, skillValue, modifier, surgeDice].concat(addDices))

              const ChatLabel = label.concat(`${abilityLabel}${skillLabel}`)

              const testVal = $('.wrapper-discipline-roll-dices .resources-counter-step').length
              const subtractVal = $('.wrapper-discipline-roll-dices .subtract-value').length * 2

              if (isSurge) console.log(event.currentTarget)
              for (let index = 0; index < rouses; index++) console.log('rouse check')
              console.log(`numDice = ${testVal - subtractVal} ChatLabel = ${ChatLabel} Difficulty = ${difficulty}`)

              // if (isSurge) _rollDice(1, getLanguage.rouse, 1, true, true)
              // for (let index = 0; index < rouses; index++) _rollDice(1, getLanguage.rouse, 1, true, true)
              // _rollDice(numDice, ChatLabel, difficulty, true)
            }
          },
          cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: getLanguage.cancel
          }
        }
        new Dialog({
          title: `${getLanguage.rolling} ${titleLabel}...`,
          content,
          buttons,
          default: 'draw'
        }).render(true)
      }
      return {
        onOpenSheet: () => actor.sheet.render(true),
        onOpenItem: () => actor.items.find(item => item.id === dataset.itemId).sheet.render(true),
        onAddExp: () => actor.update({ 'data.exp.value': exp.value + 1 }),
        onSubExp: () => actor.update({ 'data.exp.value': exp.value - 1 }),
        onRollDiscipline: () => {
          const {
            id,
            itemId,
            dice1,
            dice2,
            disciplineLevel,
            img,
            name: powerName,
            discipline: disciplineName,
            level: powerLevel,
            rouse: powerRouse
          } = event.currentTarget.dataset

          const headerRollDiscipline = `
            <style>
              .header-roll-discipline {
                position: relative;
                display: flex;
              }
              .header-roll-discipline h1,
              p,
              label {
                font-family: var(--dialog-font-family);
                font-weight: bold;
              }
              .header-roll-discipline img {
                filter: invert(10%) sepia(10%) saturate(99999%) hue-rotate(6deg) brightness(90%) contrast(50%);
                height: 28px;
                width: 60px;
                height: 60px;
                margin-right: 10px;
                border-radius: 50%;
              }
              .header-roll-discipline div {
                display: flex;
                flex-direction: column;
              }
              .header-roll-discipline div h1 {
                font-size: 16px;
                margin: 0.5rem 0 0;
                min-width: min-content;
                color: var(--dialog-red-primary);
              }
              .header-roll-discipline div p {
                font-size: 12px;
                color: var(--dialog-dark);
              }
              .header-roll-discipline .p-roll-discipline-power-level {
                position: absolute;
                display: flex;
                color: var(--dialog-red-primary);
                justify-content: center;
                align-items: center;
                text-align: center;
                top: 0;
                right: 0;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                box-shadow: 4px 4px 5px var(--dialog-dark);
              }
            </style>
            <div class="header-roll-discipline">
              <img class="img-roll-discipline" src=${img} data-id="${id}" data-item-id${itemId} />
              <div>
                <h1 class="h1-roll-discipline-power-name">${powerName}</h1>
                <p class="p-roll-discipline-discipline-name">${disciplineName}</p>
              </div>
              <p class="p-roll-discipline-power-level">${powerLevel}</p>
            </div>
          `
          const rollRouse = `
            <style>
              .rouse-value {
                color: var(--dialog-red-primary);
                text-align: center;
                font-weight: bold;
                text-family: var(--dialog-font-primary);
              }

              input[type='range'] {
                -webkit-appearance: none;
                display: block;
                margin: 0 auto;
                outline: 0;
              }
              input[type='range']:focus {
                outline: none;
              }
              input[type='range']::-webkit-slider-runnable-track {
                height: 4px;
                background: var(--dialog-primary-light);
                border: 0;
                transition: all 0.3s ease-in-out;
                box-shadow: 0px 0px 0px #000;
              }
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                background-color: var(--dialog-red-primary);
                min-width: 13px;
                min-height: 13px;
                border-radius: 0% 50% 50% 50%;
                transform: rotate(45deg);
                border: 2px solid var(--dialog-primary);
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                box-shadow: inset 2px 3px 5px var(--dialog-darkest), 0px 1px 1px var(--dialog-dark);
              }

              input[type='range']:active::-webkit-slider-runnable-track {
                background: var(--dialog-primary-light);
              }
              input[type='range']:focus::-webkit-slider-runnable-track {
                background: var(--dialog-primary-light);
              }

              input[type='range']::-webkit-slider-thumb:hover {
                background-color: var(--dialog-primary);
                min-width: 14px;
                min-height: 14px;
                border: 0;
              }
              input[type='range']::-webkit-slider-thumb:active {
                min-width: 16px;
                min-height: 16px;
              }
            </style>
            <script>
              $(document).ready(() => {
                onRouseInputChange = value => {
                  document.querySelector('.rouse-value').innerHTML = value
                }
                $('.img-roll-discipline').click(() => _handleMouseEvents(${event}).onOpenItem())
              })
            </script>
            <div class="form-group">
              <label>${getLanguage.rouse}?</label>
              <div class="range-rouse">
                <div class="rouse-value">1</div>
                <input
                  class="rouse-input"
                  type="range"
                  id="inputRouse"
                  min="1"
                  max="5"
                  step="1"
                  value="0"
                  onchange="onRouseInputChange(this.value)"
                />
              </div>
            </div>
          `
          const formGroup = powerRouse === 'true' ? rollRouse : ''
          const getRollDice = dice => {
            if (dice === 'discipline') return parseInt(disciplineLevel, 10)

            const ability = abilities[dice]
            const skill = skills[dice]

            if (ability) return parseInt(ability.value, 10)
            return parseInt(skill.value, 10)
          }
          const rollDice1 = getRollDice(dice1)
          const rollDice2 = getRollDice(dice2)

          const rollCallback = html => {
            const rouses = parseInt(html.find('#inputRouse').prop('value'), 10)
            return {
              rouses,
              addDices: [power, rollDice1, rollDice2],
              rollLabel: powerName.toLowerCase()
            }
          }

          rollDialog(
            powerName.toLowerCase(),
            {
              header: headerRollDiscipline,
              formGroups: formGroup,
              onRollCallback: rollCallback
            },
            { label: `${dice1} + ${dice2}`, numDices: rollDice1 + rollDice2 },
            true
          )
        },
        onRollAbility: () => {
          rollDialog(
            dataset.label,
            {
              onRollCallback: () => ({ addDices: dataset.roll, rollLabel: dataset.label })
            },
            { label: dataset.label, numDices: parseInt(dataset.roll, 10) },
            false,
            true
          )
        },
        onRollFeature: () => {
          const { name, level, type } = dataset
          rollDialog(
            name,
            {
              formGroups: `
                <script>
                  $(document).ready(() => {
                    const abilitySelect = $('#abilitySelect')
                    const skillSelect = $('#skillSelect')
                    const inputSurge = $('#inputSurge')
                    inputSurge.prop({disabled:true})

                    abilitySelect.change(() => {
                      $('#skillSelect option:contains(👁)').prop({ selected: true })
                      inputSurge.prop({disabled:false})
                      if(abilitySelect[0].value === '') inputSurge.prop({disabled:true})
                    })

                    skillSelect.change(() => {
                      $('#abilitySelect option:contains(👁)').prop({ selected: true })
                      inputSurge.prop({disabled:true})
                    })

                  })
                </script>
              `,
              onRollCallback: () => ({ addDices: level, rollLabel: `${getLanguage.rolling} ${type}: ${name}` })
            },
            { label: name, numDices: parseInt(level, 10) },
            false,
            true,
            true
          )
        },
        onRollHunting: () => {
          const getPercentMatchString = (string1, string2) => {
            let matches = 0

            // Exit early if either are empty.
            if (string1.length === 0 || string2.length === 0) return 0

            // Exit early if they're an exact match.
            if (string1 === string2) return 1

            const range = Math.floor(Math.max(string1.length, string2.length) / 2) - 1
            const string1Matches = new Array(string1.length)
            const string2Matches = new Array(string2.length)

            for (let i = 0; i < string1.length; i++) {
              const low = i >= range ? i - range : 0
              const high = i + range <= string2.length ? i + range : string2.length - 1

              for (let j = low; j <= high; j++) {
                if (string1Matches[i] !== true && string2Matches[j] !== true && string1[i] === string2[j]) {
                  ++matches
                  string2Matches[j] = true
                  string1Matches[i] = string2Matches[j]
                  break
                }
              }
            }

            // Exit early if no matches were found.
            if (matches === 0) return 0

            // Count the transpositions.
            let transpositions = 0
            let k = transpositions

            for (i = 0; i < string1.length; i++)
              if (string1Matches[i] === true) {
                for (j = k; j < string2.length; j++)
                  if (string2Matches[j] === true) {
                    k = j + 1
                    break
                  }
                if (string1[i] !== string2[j]) ++transpositions
              }

            let weight =
              (matches / string1.length + matches / string2.length + (matches - transpositions / 2) / matches) / 3
            let l = 0
            const p = 0.1

            if (weight > 0.7) {
              while (string1[l] === string2[l] && l < 4) ++l
              weight += l * p * (1 - weight)
            }
            return weight
          }

          const predators = {
            alleycat: {
              name: 'Alleycat',
              roll: [
                {
                  dice1: 'strength',
                  dice2: 'brawl'
                },
                {
                  dice1: 'wits',
                  dice2: 'streetwise'
                }
              ]
            },
            bagger: {
              name: 'Bagger',
              roll: [
                {
                  dice1: 'intelligence',
                  dice2: 'streetwise'
                }
              ]
            },
            bloodLeech: {
              name: 'Blood Leech',
              roll: []
            },
            cleaver: {
              name: 'Cleaver',
              roll: [
                {
                  dice1: 'manipulation',
                  dice2: 'subterfuge'
                }
              ]
            },
            consensualist: {
              name: 'Consensualist',
              roll: [
                {
                  dice1: 'manipulation',
                  dice2: 'persuasion'
                }
              ]
            },
            extortionist: {
              name: 'Extortionist',
              roll: [
                {
                  dice1: 'strength',
                  dice2: 'intimidation'
                },
                {
                  dice1: 'strength',
                  dice2: 'intimidation'
                }
              ]
            },
            farmer: {
              name: 'Farmer',
              roll: [
                {
                  dice1: 'composure',
                  dice2: 'animal ken'
                }
              ]
            },
            graverobber: {
              name: 'Graverobber',
              roll: [
                {
                  dice1: 'resolve',
                  dice2: 'medicine'
                },
                {
                  dice1: 'manipulation',
                  dice2: 'insight'
                }
              ]
            },
            osiris: {
              name: 'Osiris',
              roll: [
                {
                  dice1: 'manipulation',
                  dice2: 'subterfuge'
                }
              ]
            },
            roadsideKiller: {
              name: 'Roadside Killer',
              roll: [
                {
                  dice1: 'charisma',
                  dice2: 'drive'
                },
                {
                  dice1: 'dexterity',
                  dice2: 'drive'
                }
              ]
            },
            sandman: {
              name: 'Sandman',
              roll: [
                {
                  dice1: 'dexterity',
                  dice2: 'stealth'
                }
              ]
            },
            sceneQueen: {
              name: 'Scene Queen',
              roll: [
                {
                  dice1: 'manipulation',
                  dice2: 'persuasion'
                }
              ]
            },
            siren: {
              name: 'Siren',
              roll: [
                {
                  dice1: 'charisma',
                  dice2: 'subterfuge'
                }
              ]
            }
          }
          getPredatorType = () => {
            let predatorControl = { predator: '', matchPercent: 0 }
            Object.keys(predators).forEach(key => {
              const matching = getPercentMatchString(key, predator)
              if (predatorControl.matchPercent < matching)
                predatorControl = {
                  predator: key,
                  matchPercent: matching
                }
            })
            const predatorType = predators[predatorControl.predator]
            return { ...predatorType, key: predatorControl.predator }
          }

          const getOption = (selectOption, object) => {
            const isSelect = selectOption === '' ? 'selected' : ''
            let option = `<option value="" ${isSelect} >👁</option>`
            for (const [key, value] of Object.entries(object)) {
              const selected = selectOption === key ? 'selected' : ''
              option = option.concat(`<option value="${key}" ${selected}>${game.i18n.localize(value.name)}</option>`)
            }
            return option
          }

          const getHtmlStat = (statLabel, selectId, options) => `
            <div>
              <p>${statLabel}</p>
              <select id="select-${selectId}">
                ${options}
              </select>
            </div>
          `

          handlePredatorStats = key => {
            const getPredatorRolls = predatorType => {
              const array =
                predatorType !== undefined && predatorType.roll.length > 0
                  ? predatorType
                  : { name: '', roll: [{ dice1: '', dice2: '' }] }
              const { roll, key: predatorKey } = array

              return `
                <style>
                  .predator-roll-wrapper {
                    display: flex;
                    flex-direction: row;
                    align-items: baseline;
                    justify-content: center;
                  }
                  .predator-roll-wrapper div {
                    border: 0;
                  }
                  .predator-roll-wrapper div p {
                    top: -25px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
                  }
                  .predator-roll-wrapper + div {
                    margin-top: 12px;
                  }
                </style>
                ${roll
                  .map(
                    (value, index) => `
                        <div class="predator-roll-wrapper">
                          ${getHtmlStat(getLanguage.abilities, `ability-${index}`, getOption(value.dice1, abilities))}
                          ${getHtmlStat(getLanguage.skills, `skill-${index}`, getOption(value.dice2, skills))}
                          <input type="radio" id="radio-${predatorKey}-${index}" name="radio-predator" value="${index}" data-predator=${predatorKey} onchange='handleRadioChange(event)'/>
                        </div>
                      `
                  )
                  .join('')}
              `
            }
            const getPredatorWrapper = () => `
              <style>
                .predator-wrapper {
                  display: flex;
                  flex-direction: column;
                  border: 1px solid var(--dialog-primary-dark);
                  position: relative;
                  padding: 15px;
                }
                .predator-wrapper p {
                  z-index: 1;
                  position: absolute;
                  top: -17px;
                  background: var(--dialog-primary);
                  padding: 1px;
                  border-radius: 4px;
                }
                .predator-wrapper div {
                  position: relative;
                  padding: 8px;
                  border: 1px solid var(--dialog-primary-dark);
                }
              </style>
              <div class="predator-wrapper">
                <p>possible roll</p>
                ${getPredatorRolls({ ...predators[key], key })}
              </div>
            `

            return getPredatorWrapper()
          }

          handleRadioChange = radioEvent => {
            const {
              currentTarget: { value }
            } = radioEvent

            setRollCircleStep(`select-skill-${value}`, 'roll-skill', 'skills')
            setRollCircleStep(`select-ability-${value}`, 'roll-ability', 'abilities')
            $('.predator-roll-wrapper :radio[name="radio-predator"]:checked')
              .siblings('div')
              .find('select')
              .change(changeEvent => selectResourceChange(changeEvent))
          }
          const selector = `
            <script>
              $(document).ready(() => {

                const inputSurge = $('#inputSurge')
                const predatorSelect = $('#predator-select')
                const predatorGroup = $('#predator-group')
                const dialog = $('#hunting-roll').parent().parent().parent().parent()
                let dialogHeight = parseInt(dialog.css('height'), 10)

                const predatorName = getPredatorType().name


                handlePredatorSelect = event => {
                  const predatorKey = predatorSelect[0].value
                  predatorGroup[0].innerHTML = handlePredatorStats(predatorKey)
                  let plusHeight = parseInt($('.predator-wrapper').css('height'), 10)
                  let newHeight = (dialogHeight + plusHeight).toString() + 'px'
                  dialog.css('min-height', newHeight)
                  if($('.roll-skill')[0] !== undefined && $('.roll-ability')[0] !== undefined){
                    $('.roll-skill')[0].innerHTML = ''
                    $('.roll-ability')[0].innerHTML = ''
                  }
                }
                handlePredatorSelect()
              })

            </script>
            <div class="form-group" id="hunting-roll">
              <label>Predator</label>
              <select id="predator-select" onchange="handlePredatorSelect(event)">
                ${getOption(getPredatorType().key, predators)}
              </select>
            </div>
            <div class="form-group" id="predator-group"></div>
          `
          // selector
          rollDialog(
            'roll hunting',
            {
              header: '',
              formGroups: selector,
              onRollCallback: () => ({
                rouses: 0,
                addDices: [],
                rollLabel: ''
              })
            },
            { label: '', numDices: 0 }
          )
        },
        onRollHunger: () => _rollDice(1, getLanguage.rouse, 1, true, true),
        onRollWillpower: () => {
          const numDice = max - superficial - aggravated
          _rollDice(numDice, getLanguage.rollingWillpower, 0, false, false, false)
        },
        onRollFrenzy: () => {
          const actualWillpower = max - aggravated - superficial
          const humanityMod = Math.floor(humanityValue / 3)

          const content = `
            <form>
              <div class="form-group">
                <label>${getLanguage.modifier}</label>
                <input type="text" id="inputMod" value="0" />
              </div>
              <div class="form-group">
                <label>${getLanguage.difficulty}</label>
                <input type="text" min="0" id="inputDif" value="0" />
              </div>
            </form>
          `

          const buttons = {
            draw: {
              icon: '<i class="fas fa-check"></i>',
              label: getLanguage.roll,
              callback: async html => {
                const modifier = parseInt(html.find('#inputMod')[0].value || 0, 10)
                const difficulty = parseInt(html.find('#inputDif')[0].value || 0, 10)

                const numDice = actualWillpower + humanityMod + modifier

                _rollDice(numDice, getLanguage.resistingFrenzy, difficulty, false)
              }
            },
            cancel: {
              icon: '<i class="fas fa-times"></i>',
              label: getLanguage.cancel
            }
          }

          new Dialog({
            title: getLanguage.frenzy,
            content,
            buttons,
            default: 'draw'
          }).render(true)
        },
        onRollRemorse: () => {
          const emptyHumanity = 10 - (humanityValue + stains)
          const numDice = emptyHumanity === 0 ? 1 : emptyHumanity
          _rollDice(numDice, getLanguage.rollingRemorse, 1, false, false, false, true)
        }
      }
    }
    return {
      onScrollLeft: () => {
        const hideContent = $(currentTarget).find('.stats-hide-content')
        hideContent[0].addEventListener('wheel', evt => {
          evt.preventDefault()
          // hideContent.animate({ scrollLeft: `+=${evt.deltaY}` }, 300)
          hideContent[0].scrollLeft += evt.deltaY
        })
      },
      onFeatureToggle: () => parentNode.classList.toggle('show-content'),
      onCollapsibleToggle: () =>
        $(currentTarget).closest('span').nextAll('.collapse')[0].classList.toggle('show-content')
    }
  }

  function htmlElements(actor) {
    const { _id: actorId, name: actorName, img: actorImg, data: actorData } = actor.data
    const {
      abilities: actorAbilities,
      blood: { potency },
      exp,
      headers,
      skills: actorSkills
    } = actorData

    const bloodPotency = getBloodPotency(potency).text

    /**
     * It takes an integer and returns an array of objects with the same number of elements as the integer,
     * with each object having an index property and an active property
     * @param abilityValue - The value of the ability score.
     * @returns An array of objects with two properties, index and active.
     */
    const getResourcesActivity = abilityValue => {
      const activityArray = []
      for (let index = 0; index < 5; index++)
        index < abilityValue
          ? activityArray.push({ index, isActive: '-' })
          : activityArray.push({ index, isActive: false })
      return activityArray
        .map(({ index, isActive }) => htmlElements(actor).DIALOG__RESOURCE_COUNTER_STEP(index, isActive, 'circle'))
        .join('')
    }

    const dialogButton = (className, text, data, onClick) => `
      <style>
        .btn {
          position: relative;
          cursor: pointer;
          user-select: none;
          border-radius: 5px;

          text-transform: uppercase;
          text-align: center;
          text-decoration: none;
          font-size: 10px;
          font-family: var(--dialog-font-family);
          /* Setting the white-space property to nowrap. */
          transition: all 0.3s ease-in-out;
        }

        .btn .text {
          position: relative;
          z-index: 10000;
          font-family: var(--dialog-font-family);
          text-transform: uppercase;
          text-decoration: none;
          font-weight: bold;
          font-size: 10px;
          transition: all 0.3s ease-in-out;
        }

        .btn-type1 {
          border: 2px solid var(--dialog-primary-light);
          box-sizing: border-box;
          display: inline-block;
          outline: none;
          overflow: visible;
        }

        .btn-type1::before {
          content: ' ';
          position: absolute;
          width: 12px;
          height: 2px;
          background: var(--dialog-red-primary);
          bottom: 5px;
          left: 5px;
          transform: translateY(-50%);
          transform-origin: center;
          transition: all 0.3s;
        }

        .btn-type1 .text {
          border: 0;
          display: block;
          text-align: left;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          min-height: 32px;
          width: 57px;
        }

        .btn-type1 .top-key {
          height: 2px;
          width: 1.5625rem;
          top: -2px;
          left: 0.625rem;
          position: absolute;
          background: var(--dialog-primary);
          transition: width 0.5s ease-out, left 0.3s ease-out;
        }

        .btn-type1 .bottom-key-1 {
          height: 2px;
          width: 1.5625rem;
          right: 1.875rem;
          bottom: -2px;
          position: absolute;
          background: var(--dialog-primary);
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }

        .btn-type1 .bottom-key-2 {
          height: 2px;
          width: 0.625rem;
          right: 0.625rem;
          bottom: -2px;
          position: absolute;
          background: var(--dialog-primary);
          transition: width 0.5s ease-out, right 0.3s ease-out;
        }

        .btn-type1:hover {
          color: var(--dialog-primary);
          background: var(--dialog-red-primary);
          border: 2px solid var(--dialog-red-primary);
        }

        .btn-type1:hover::before {
          width: 40px;
          background: var(--dialog-primary);
        }

        .btn-type1:hover .text {
          color: var(--dialog-primary);
          padding-top: 8px;
        }

        .btn-type1:hover .top-key {
          left: -2px;
          width: 0px;
        }

        .btn-type1:hover .bottom-key-1,
        .btn-type1:hover .bottom-key-2 {
          right: 0;
          width: 0;
        }

        .btn-type2 {
          overflow: hidden;
          text-overflow: ellipsis;
          display: inline-block;
          width: 140px;
          min-height: 16px;
          max-height: 16px;
          border-bottom-left-radius: 0;

          padding: 3px;
        }

        .btn-type2:hover {
          transform: translateY(-3px);
          background-color: var(--dialog-primary);
          box-shadow: -8px 8px 23px -3px rgba(0, 0, 0, 0.53);
          max-height: 100px;
        }

        .btn-type2 .text {
          overflow: hidden;
          white-space: normal;
          overflow-wrap: break-word;
        }
        .btn-type2:hover .text {
          overflow: auto;

          color: var(--dialog-primary);
        }
        .btn-type2:active {
          transform: translateY(-1px);
          box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
        }
        .btn-type2::before {
          z-index: 1;
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          height: 700%;
          width: 160%;
          background: var(--dialog-red-primary);
          -webkit-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
          -webkit-transform: translateX(-78%) translateY(-30%) rotate(45deg);
          transform: translateX(-78%) translateY(-30%) rotate(45deg);
        }

        .btn-type2:hover::before {
          -webkit-transform: translateX(-20%) translateY(-40%) rotate(45deg);
          transform: translateX(-20%) translateY(-40%) rotate(45deg);
        }
        .wrapper-btn {
          position: relative;
          display: flex;
          align-items: center;
          min-width: 165px;
          margin-bottom: 5px;
        }
        .wrapper-btn a {
          position: absolute;
          visibility: hidden;
          opacity: 0;
          transition: all 0.5s;
        }
        .wrapper-btn .item-dice {
          right: 50%;
          top: -11px;
          pointer-events: none;
        }
        .wrapper-btn:hover a {
          visibility: visible;
          opacity: 1;
        }
        .wrapper-btn .item-dice i {
          user-select: none;
          display: flex;
          justify-content: center;
          align-items: center;
          color: var(--dialog-red-primary);
          background: var(--dialog-primary);
          font-size: 11px;
          border-radius: 50%;
          min-width: 17px;
          min-height: 17px;
          transition: all 0.5s;
        }
        .btn-type2:active ~ .item-dice i {
          font-size: 12px;
          min-width: 18px;
          min-height: 18px;
          transition: all 0.5s;
        }
      </style>

      ${
        data.type === '1'
          ? `
              <p class="btn btn-type1 ${className}" onclick='${onClick}' data-id=${actorId}>
                <span class="top-key"></span>
                <span class="resources-label text title" data-title="${data.title}" position="left"> ${text} </span>
                <span class="bottom-key-1"></span>
                <span class="bottom-key-2"></span>
              </p>
            `
          : `
              <div class="wrapper-btn">
                <p class="btn btn-type2 ${className}" onclick='${onClick}' data-id=${actorId} ${data.addData}>
                  <span class="text"> ${text} </span>
                </p>
                ${data.element}
                ${
                  data.rollable
                    ? `
                        <a class="item-dice">
                          <i class="fas fa-dice-d20"></i>
                        </a>
                      `
                    : ''
                }
              </div>
            `
      }
    `
    const dialogResourceCounterStep = (dataIndex, dataState, dataType) => `
      <style>
        .resources-counter-step {
          display: inline-block;
          height: 14px;
          width: 14px;
          margin: 4px 4px 0 0;
          background-color: rgba(224, 221, 212, 0.3);
          box-shadow: inset 2px 3px 5px var(--dialog-red-darker);
        }

        .resources-counter-step[data-state='-'] {
          background-color: var(--dialog-red-primary);
        }

        .resources-counter-step[data-state='/'] {
          background: linear-gradient(
            135deg,
            transparent 0%,
            transparent 43%,
            var(--dialog-red-darker),
            var(--dialog-red-primary),
            transparent 57%,
            transparent 50%
          );
        }

        .resources-counter-step[data-state='x'] {
          background: linear-gradient(
              45deg,
              transparent 0%,
              transparent 43%,
              var(--dialog-red-darker),
              var(--dialog-red-primary),
              transparent 57%,
              transparent 50%
            ),
            linear-gradient(
              135deg,
              transparent 0%,
              transparent 43%,
              var(--dialog-red-darker),
              var(--dialog-red-primary),
              transparent 57%,
              transparent 50%
            );
        }
        .resources-counter-step[data-type='circle'] {
          margin: 0;
          border-radius: 50%;
        }
        .resources-counter-step[data-type='hunger'] {
          border-radius: 0% 50% 50% 50%;
          transform: rotate(45deg);
        }
      </style>
      <p class="resources-counter-step" data-index="${dataIndex}" data-state="${dataState}" data-type="${dataType}"></p>
    `
    const dialogResourcesContent = (placeholder, resourceMarks, title = '', onClick = '', hunger = '') => `
      <p
        class="resources-label ${onClick !== '' ? 'is-clickable' : ''} ${title !== '' ? 'title' : ''}"
        onclick="${onClick}"
        data-title="${title}"
        data-id="${actorId}"
      >
        ${placeholder}
      </p>
      <div class="resources-counter">
        ${resourceMarks
          .map(({ dataIndex, dataState }) => dialogResourceCounterStep(dataIndex, dataState, hunger))
          .join('')}
      </div>
    `
    const dialogIconDice = (className = '', title = '') => `
      <style>
        .dice-icon {
          position: absolute;
          width: 20px;
          filter: invert(100%) sepia(30%) saturate(621%) hue-rotate(316deg) brightness(88%) contrast(90%);
          background: var(--dialog-primary-transparent);
          border: 0;
          border-radius: 50%;
        }
      </style>
      <img
        class="dice-icon ${className}"
        data-title="${title}"
        data-id=${actorId}
        src="/systems/vtm5e/assets/images/dice.svg"
      />
    `
    const dialogBloodGift = (placeholder, gift) => `
      <style>
        .wrapper-blood-gift-label {
          background-color: var(--dialog-red-transparent);
        }
        .blood-gifts-content {
          margin-left: 5px;
        }
        .blood-gifts-label {
          border-top: 2px solid var(--dialog-red-transparent);
          width: 46%;
        }
      </style>
      <div class="header-label-wrapper wrapper-blood-gift-label">
        <span class="header-label header-placeholder blood-gifts-label">${placeholder}</span>
        <span class="header-label blood-gifts-content">${gift}</span>
      </div>
    `
    const dialogHeaderLabelContent = (label, content) => `
      <style>
        .wrapper-label-content span {
          min-height: 20px;
        }
        .wrapper-label-content .header-placeholder {
          width: 75px;
        }
        .wrapper-label-content i {
          color: var(--dialog-red-primary);
          height: 100%;
        }
        .header-content {
          color: var(--dialog-red-primary);
        }
      </style>
      <div class="header-label-wrapper wrapper-label-content">
        <span class="header-label header-placeholder">${label}</span>
        <i class="fas fa-caret-right"></i>
        <span class="header-label header-content">${content}</span>
      </div>
    `
    /* -------------------------- dialogHeaderInnerContent --------------------------  */
    const dialogToolTipBloodPotency = () => `
    <style>
      .blood-potency[data] {
        top: 2px;
        left: 40px;
        transition: all 0.4s;
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
        border-top: 2px solid var(--dialog-red-primary);
      }
      .blood-potency:hover::after {
        text-shadow: 0 0 10px white;
        transition: all 0.4s;
      }
    </style>
    <div class="tooltip blood-potency" data="${potency}">
      <i class="bi bi-droplet-fill bi-tooltip"></i>
      <span class="tooltip-hide-content tooltip-label">${getLanguage.bloodPotency}</span>
      <div class="wrapper-dialog tooltip-hide-content blood-potency-hide-content">
        ${dialogBloodGift(getLanguage.bloodSurge, bloodPotency.surge)}
        ${dialogBloodGift(getLanguage.powerBonus, bloodPotency.power)}
        ${dialogBloodGift(getLanguage.FeedingPenalty, bloodPotency.feeding)}
        ${dialogBloodGift(getLanguage.mendAmount, bloodPotency.mend)}
        ${dialogBloodGift(getLanguage.rouseReRoll, bloodPotency.rouse)}
        ${dialogBloodGift(getLanguage.baneSeverity, bloodPotency.bane)}
      </div>
    </div>
  `
    const dialogStatsWrapper = (name, index, value) => `
      <style>
        .stats-resource-wrapper {
          display: flex;
          align-items: center;
          flex-wrap: nowrap;
          width: 170px;
        }
        .stats-placeholder {
          justify-content: center;
          border-top: 2px solid var(--dialog-red-transparent);
          padding-left: 2px;
          margin-right: 3px;
          width: 53%;
        }
        .stats-resource-wrapper:hover .dice-icon {
          visibility: visible;
          opacity: 1;
        }
        .stats-resource-wrapper:nth-child(3n + 2):nth-child(-n + 18) {
          order: 1;
        }
        .stats-resource-wrapper:nth-child(3n + 1):nth-child(-n + 18) {
          order: 2;
        }
        .stats-resource-wrapper:nth-child(3n + 3):nth-child(-n + 18) {
          order: 3;
        }
        .stats-resource-wrapper:nth-child(n + 20) {
          order: 4;
        }
        .stats-resource-wrapper:nth-child(n + 14):nth-child(-n + 18) {
          margin-bottom: 3px;
        }

        .stats-resource-wrapper .resources-counter {
          position: relative;
        }
        .stats-resource-wrapper .resources-counter .dice-icon {
          left: -12px;

          visibility: hidden;
          opacity: 0;

          transition: all 0.3s ease-in-out;
        }
      </style>
      <div class="stats-resource-wrapper">
        <span
          for="data.data.abilities.${name}.value"
          class="header-label header-placeholder stats-placeholder is-rollable"
          onclick="_handleMouseEvents(event).onRollAbility()"
          data-id=${actorId}
          data-roll=${value}
          data-label=${game.i18n.localize(name)}
        >
          ${game.i18n.localize(name)}
        </span>
        <div class="resources-counter" data-value=${index} data-name=${value}>
          ${getResourcesActivity(value)} ${dialogIconDice(actorId)}
        </div>
      </div>
    `
    const dialogToolTipStats = () => `
      <style>
        .stats-hide-content {
          overflow-x: scroll;
          display: flex;
          flex-wrap: wrap;
          align-content: space-between;
          height: 199px;
          width: 340px;
          flex-direction: column;
          background-color: var(--dialog-primary-transparent);
        }

        .tooltip-stats {
          left: 24px;
        }
      </style>
      <div class="tooltip tooltip-stats" onmouseover="_handleMouseEvents(event).onScrollLeft()">
        <i id="image" class="bi bi-bookmarks-fill bi-tooltip"></i>
        <span class="tooltip-hide-content tooltip-label">${getLanguage.attributes} & ${getLanguage.skills}</span>
        <div class="wrapper-dialog tooltip-hide-content stats-hide-content">
          ${Object.keys(actorAbilities)
            .map((key, index) => dialogStatsWrapper(key, index, actorAbilities[key].value))
            .join('')}
          ${Object.keys(actorSkills)
            .filter(key => actorSkills[key].value > 0)
            .map((key, index) => dialogStatsWrapper(key, index, actorSkills[key].value))
            .join('')}
        </div>
      </div>
    `
    const dialogToolTipTouchstones = touchstonesList => `
    <style>
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
        content: '';
      }

      .bi-person-bounding-box {
        font-size: 50px;
        position: absolute;
        right: -25px;
        top: -18px;
        color: var(--dialog-red-primary);
        background-color: var(--dialog-primary-transparent);
        border-radius: 6px;
      }

      .ts-convic-image {
        position: absolute;
        right: -40px;
        top: -20px;
      }

      .ts-name {
        border-top: 0;
        width: 100%;
      }

      .ts-convic-conviction {
        display: flex;
        width: 95%;
        min-height: 35px;
        padding-left: 5px;
      }

      .touchstones {
        left: 7px;
      }
    </style>
    <div class="tooltip touchstones">
      <i class="bi bi-people-fill bi-tooltip"></i>
      <span class="tooltip-hide-content tooltip-label">${getLanguage.touchstonesAndConvictions}</span>
      <div class="wrapper-dialog tooltip-hide-content touchstones-body">
        ${touchstonesList
          .map(
            tsConvictions => `
    <div class="touchstones-content">
        ${
          tsConvictions.touchstoneImage !== 'img'
            ? `<img class="image ts-convic-image" src=${tsConvictions.touchstoneImage}/>`
            : `<i class="bi bi-person-bounding-box"></i>`
        }
        <span class="header-label header-placeholder blood-gifts-label ts-name">${tsConvictions.touchstone}</span>
    </div>
    <span class="ts-convic-conviction">"${tsConvictions.conviction}"</span>`
          )
          .join('')}
      </div>
    </div>
  `
    const dialogHeaderInnerContent = touchstonesList => `
      <style>
        .grid-column .header-wrapper {
          grid-column: header;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        }
        .tooltips-wrapper {
          position: absolute;
          height: 18px;
          width: 100%;
          box-shadow: inset 2px 3px 5px var(--dialog-darkest), 0px 2px 2px var(--dialog-light);
          background-color: var(--dialog-red-primary);
          border-radius: 10px 0 0 10px;
        }

        .header-Wrapper-content {
          display: flex;
          position: relative;
          flex-direction: column;
          width: 100%;
        }

        .header-label-wrapper {
          display: flex;
          align-items: center;
        }
        .header-placeholder {
          background: var(--dialog-red-primary);
          width: 30%;
        }

        .header-placeholder[end='true'] {
          border-radius: 0 0 0 12%;
        }
        .wrapper-dialog {
          border-bottom: 2px solid var(--dialog-red-primary);
          border-left: 2px solid var(--dialog-red-primary);
          border-radius: 0 0 0 10px;
          margin-bottom: 7px;
        }
        .header-label {
          display: flex;
          align-items: center;
          font-size: 12px;
          padding: 2px 2px 2px 2px;
          font-weight: bold;
          width: 100%;
          color: var(--dialog-primary);
        }
        .image {
          width: 50px;
          margin-right: 15px;
          border: 0;
        }
        .tooltip-image-wrapper {
          position: relative;
          width: 70px;
          height: 100%;
        }

        .actor-image {
          position: absolute;
          padding-top: 5px;
          top: 50%; /* position the top  edge of the element at the middle of the parent */
          left: 50%; /* position the left edge of the element at the middle of the parent */
          transform: translate(-50%, -50%);
        }
        .actor-name {
          color: black;
          padding-left: 3px;
          margin: 0;
        }

        .open-sheet {
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;

          top: -5px;
          right: 0;
        }
        .open-sheet i {
          color: black;
          margin-top: 7px;
          margin-left: 4px;
        }
        .open-sheet:hover i {
          color: var(--dialog-primary);
        }
      </style>
      <div class="tooltip-image-wrapper">
        <div class="tooltips-wrapper">
        ${dialogToolTipBloodPotency()}
        ${dialogToolTipStats()}
        ${dialogToolTipTouchstones(touchstonesList)}
        </div>
        <img class="image actor-image" src=${actorImg} alt="img" />
      </div>
      <div class="header-Wrapper-content">
        <a
          class="open-sheet is-clickable title"
          onclick='${event => _handleMouseEvents(event).onOpenSheet()}'
          data-id="${actorId}"
          data-title="${getLanguage.openSheet}"
        >
          <i class="bi bi-file-earmark-text-fill open-sheet-icon"></i>
        </a>
        <div class="wrapper-dialog">
          <h1 class="header-label actor-name">${actorName}</h1>
          ${dialogHeaderLabelContent(getLanguage.concept, headers.concept)}
          ${dialogHeaderLabelContent(getLanguage.ambition, headers.ambition)}
          ${dialogHeaderLabelContent(getLanguage.desire, headers.desire)}
        </div>
      </div>
    `
    /* -------------------------- dialogResourcesInnerContent --------------------------  */
    const dialogResourcesInnerContent = (hungerMarks, healthMarks, willpowerMarks, humanityMarks) => `
      <style>
        .resource-wrapper {
          display: grid;
          grid-gap: 3px;
          grid-template-areas:
            'exp hunger hunger hunger'
            'frenzy health willpower humanity';
        }
        .resource-wrapper .wrapper {
          border-radius: 4px;
          padding: 3px;
          background: var(--dialog-primary-transparent-dark);
        }
        .resources-label {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;

          text-transform: uppercase;
          color: var(--dialog-red-primary);
          font-family: var(--dialog-font-family);
          font-weight: bold;
          font-size: 11px;

          margin: auto;
          padding: 2px;
          border-bottom: 2px solid var(--dialog-red-primary);

          min-height: 30px;
        }
        .exp-wrapper {
          grid-area: exp;
        }
        .exp-wrapper div {
          display: flex;
        }
        .exp-content {
          padding-top: 5px;
          position: relative;
        }
        .exp-value {
          border: none;
          font-size: 14px;
          min-height: 0px;
        }
        .exp-controls {
          position: absolute;
          top: 1px;
          right: -10px;
          flex-direction: column;
        }
        .exp-controls a {
          color: var(--dialog-red-primary);
        }
        .exp-controls:hover a {
          color: var(--dialog-primary);
        }
        .frenzy-wrapper {
          grid-area: frenzy;
        }
        .frenzy-wrapper p {
          min-width: 60px;
        }

        .five-mark-resource {
          width: 100px;
        }

        .hunger-wrapper {
          grid-area: hunger;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hunger-wrapper p {
          margin-bottom: 5px;
        }

        .health-wrapper {
          grid-area: health;
        }

        .willpower-wrapper {
          grid-area: willpower;
        }

        .humanity-wrapper {
          grid-area: humanity;
        }
      </style>
      <div class="exp-wrapper wrapper">
        <p class="resources-label exp-label">${getLanguage.exp}</p>
        <div class="exp-content">
          <p class="resources-label exp-value">${exp.value}</p>
          <div class="exp-controls">
            <a class="is-clickable add-exp" onclick="_handleMouseEvents(event).onAddExp()" data-id=${actorId}>
              <i class="fas fa-plus-circle"></i>
            </a>
            <a class="is-clickable sub-exp" onclick="_handleMouseEvents(event).onSubExp()" data-id=${actorId}>
              <i class="fas fa-minus-circle"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="frenzy-wrapper wrapper">
        ${dialogButton(
          'frenzy-button',
          getLanguage.frenzy,
          {
            type: '1',
            title: getLanguage.rollFrenzy
          },
          '_handleMouseEvents(event).onRollFrenzy()'
        )}
        ${dialogButton(
          'hunting-button',
          getLanguage.hunting,
          {
            type: '1',
            title: getLanguage.rollHunting
          },
          '_handleMouseEvents(event).onRollHunting()'
        )}
      </div>
      <div class="hunger-wrapper wrapper">
        ${dialogResourcesContent(
          getLanguage.hunger,
          hungerMarks,
          getLanguage.rouse,
          '_handleMouseEvents(event).onRollHunger()',
          'hunger'
        )}
      </div>
      <div class="health-wrapper wrapper five-mark-resource">
        ${dialogResourcesContent(getLanguage.health, healthMarks)}
      </div>
      <div class="willpower-wrapper wrapper five-mark-resource">
        ${dialogResourcesContent(
          getLanguage.willpower,
          willpowerMarks,
          getLanguage.rollWillpower,
          '_handleMouseEvents(event).onRollWillpower()'
        )}
      </div>
      <div class="humanity-wrapper wrapper five-mark-resource">
        ${dialogResourcesContent(
          getLanguage.humanity,
          humanityMarks,
          getLanguage.remorse,
          '_handleMouseEvents(event).onRollRemorse()'
        )}
      </div>
    `
    /* -------------------------- dialogFeatureInnerContent --------------------------  */
    const dialogDisciplines = actorDisciplines => `
      <style>
        .card-discipline {
          display: grid;
          grid-template-columns: 55% 45%;
          grid-template-areas:
            'discipline level'
            'content content';
        }
        .discipline-name {
          grid-area: discipline;
          width: 90px;
        }
        .discipline-value {
          grid-area: level;
        }
        .power-container {
          grid-area: content;
        }
        .icon-edit {
          right: 0;
          top: 50%;
          color: var(--dialog-red-primary);
          transform: translateY(-50%);
          transition: all 0.5s;
        }
        .icon-edit:hover i {
          color: var(--dialog-primary);
        }
        .icon-edit i {
          font-size: 12px;
          background: none;
        }
        .item-blood {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          bottom: -8px;
        }

        .btn-power .item-dice {
          right: calc(50% + 20px);
        }
        .btn-power {
          overflow: visible;
        }
        .btn-power:hover + .icon-edit {
          top: calc(50% - 4px);
        }
        .btn-power[dices]::after {
          content: attr(dices);
          position: relative;
          z-index: 10000;
          display: flex;
          justify-content: center;
          text-transform: capitalize;
          transition: all 0.3s ease-in-out;
        }
        .btn-power[dices]:hover::after {
          color: var(--dialog-primary);
        }
      </style>
      <ol>
        ${Object.keys(actorDisciplines)
          .map(discipline => {
            const { name: disciplineName, powers, value } = actorDisciplines[discipline]
            const localizeName = game.i18n.localize(disciplineName)
            return `
                <li class="card-discipline">
                  <span class="discipline-name collapsible" onclick='_handleMouseEvents(event).onCollapsibleToggle()' data-title="${localizeName}">${localizeName}</span>
                  <div class="discipline-value resources-counter">${getResourcesActivity(value)}</div>
                  <!-- Empty box (for setting back to 0), and then iterate through the rest of the discipline dots -->
                  <div class="power-container collapse hidden-content">
                    ${powers
                      .map(power => {
                        const {
                          id,
                          img,
                          data: {
                            name: powerName,
                            data: { rollable, level, dice1, dice2, discipline: dataDiscipline, rouse }
                          }
                        } = power
                        const isRollable = rollable
                          ? {
                              addData: `
                                dices="${dice1} + ${dice2}"
                                data-id="${actorId}"
                                data-item-id="${id}"
                                data-discipline="${dataDiscipline}"
                                data-discipline-level="${value}"
                                data-img="${img}"
                                data-name="${powerName}"
                                data-rouse="${rouse}"
                                data-rollable=${rollable}
                                data-level="${level}"
                                data-dice1="${dice1}"
                                data-dice2="${dice2}"
                              `
                            }
                          : { addData: '' }
                        const { addData } = isRollable
                        return `
                          <!-- Discipline power information -->
                          ${dialogButton(
                            'btn-power',
                            powerName,
                            {
                              type: 2,
                              addData,
                              rollable,
                              element: `
                              ${
                                rouse
                                  ? `
                                      <a class="item-blood item-dice">
                                        <i class="fa fa-tint" aria-hidden="true"></i>
                                      </a>
                                    `
                                  : ''
                              }
                              <a class="icon-edit is-clickable" onclick='_handleMouseEvents(event).onOpenItem()' data-id="${actorId}" data-item-id="${id}">
                                <i class="fas fa-edit"></i>
                              </a>
                            `
                            },
                            '_handleMouseEvents(event).onRollDiscipline()'
                          )}
                        `
                      })
                      .join('')}
                  </div>
                </li>
              `
          })
          .join('')}
      </ol>
    `
    const dialogFeatures = featuresTypes => `
      <style>
        .card-feature {
          display: flex;
          flex-direction: column;
        }
        .wrapper-btn-feature {
          position: relative;
        }
        .feature-level {
          position: absolute;
          right: 7px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--dialog-red-primary);
          background-color: var(--dialog-primary);
          text-align: center;
          box-shadow: 3px 2px 5px var(--dialog-darkest);
          font-family: var(--dialog-font-family);
          font-size: 12px;
          font-weight: bold;
          height: 12px;
          width: 12px;
          border-radius: 50%;
          transition: all 0.4s;
        }
        .btn-feature:hover + .feature-level {
          top: calc(50% - 4px);
        }
      </style>
      <ol>
        ${featuresTypes
          .map(
            type => `
                <li class="card-feature">
                  <span class="collapsible" onclick='_handleMouseEvents(event).onCollapsibleToggle()'>${
                    type.name
                  }</span>
                  <div class="collapse hidden-content">
                    ${
                      type.content.length === 0
                        ? ``
                        : type.content
                            .map(feature =>
                              (() => {
                                const {
                                  data: { points },
                                  name
                                } = feature
                                return dialogButton(
                                  'btn-feature',
                                  name,
                                  {
                                    type: '2',
                                    addData: `data-name='${name}' data-level=${points} data-type='${type.name}'`,
                                    rollable: true,
                                    element: `<span class="feature-level">${points}</span>`
                                  },
                                  '_handleMouseEvents(event).onRollFeature()'
                                )
                              })()
                            )
                            .join('')
                    }
                  </div>
                </li>
              `
          )
          .join('')}
      </ol>
    `
    const dialogGetFeatureBody = (bodyType = { label: '', element: '' }) => `
      <style>
        .feature-discipline-container {
          position: relative;
          min-width: 190px;
          overflow-y: auto;
        }
        .feature-discipline-title {
          position: absolute;
          left: 0;
          right: 0;
          margin-left: auto;
          margin-right: auto;
          display: flex;
          justify-content: center;
          text-align: center;
          width: min-content;
          text-transform: uppercase;
          font-family: var(--dialog-font-family);
          font-weight: bold;
          font-size: 12px;
          color: var(--dialog-red-primary);
          background-color: var(--dialog-primary);
          box-shadow: -8px 8px 23px -3px rgba(0, 0, 0, 0.53);
          border-radius: 5px;
          padding: 3px;
        }
        .feature-discipline-container ol {
          width: 170px;
          list-style-type: none;
          margin-top: 25px;
          margin-left: 6px;
          padding: 0;
          overflow-y: clip;
        }
        .feature-discipline-container li {
          border: 1px solid black;
          border: 1px solid var(--dialog-light);
          border-radius: 5px;
          padding: 3px;
          margin-bottom: 5px;
        }
        .collapsible {
          cursor: pointer;
          font-family: var(--dialog-font-family);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-transform: uppercase;
          color: var(--dialog-red-primary);
          font-weight: bold;
          font-size: 12px;
        }
        .collapse {
          border-left: 3px solid var(--dialog-red-primary);
          padding-left: 2px;

          pointer-events: none;
          opacity: 0;
          visibility: hidden;
        }
      </style>
      <div class="feature-discipline-container">
        <p class="feature-discipline-title">${bodyType.label}</p>
        ${bodyType.element}
      </div>
    `
    const dialogFeatureInnerContent = (actorDisciplines, featuresTypes) => `
      <style>
        .grid-column .feature-wrapper {
          grid-column: feature;
          min-height: 13px;
          overflow: hidden;
        }

        .feature-header {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-header a {
          position: absolute;
          display: flex;
          min-width: 0;
          background: var(--dialog-primary);
          min-height: 0;
          border-radius: 7px 0 0 7px;
          transition: all 0.55s ease-in-out;
        }

        .feature-header i {
          z-index: 100;
          color: var(--dialog-red-primary);
          font-size: 14px;
          cursor: pointer;
          padding-left: 2px;
          transition: all 0.55s ease-in-out;
        }
        .feature-header:hover a {
          min-width: 100%;
          min-height: 12px;
          background: var(--dialog-red-primary);
          transition: all 0.55s ease-in-out;
        }

        .feature-header:hover i {
          color: var(--dialog-primary);
          transition: all 0.55s ease-in-out;
        }

        .feature-body {
          margin-top: 12px;
          display: flex;
          justify-content: space-between;
          overflow: hidden;
        }

        .hidden-content {
          display: flex;
          flex-direction: column;
          white-space: nowrap;

          max-height: 2px;
          transition: all 0.25s ease-in;
        }
        .show-content {
          max-height: 250px;
          pointer-events: auto !important;
          visibility: visible !important;
          opacity: 1 !important;
          transition: all 0.4s linear;
        }
      </style>
      <div class="feature-header" onclick="_handleMouseEvents(event).onFeatureToggle()">
        <a>
          <i class="fas fa-solid fa-eye toggle-arrow"></i>
        </a>
      </div>
      <div class="feature-body">
        ${dialogGetFeatureBody({
          label: getLanguage.disciplines,
          element: dialogDisciplines(actorDisciplines)
        })}
        ${dialogGetFeatureBody({
          label: getLanguage.features,
          element: dialogFeatures(featuresTypes)
        })}
      </div>
    `
    return {
      DIALOG__RESOURCE_COUNTER_STEP: dialogResourceCounterStep,
      DIALOG__HEADER_INNER_CONTENT: dialogHeaderInnerContent,
      DIALOG__RESOURCES_INNER_CONTENT: dialogResourcesInnerContent,
      DIALOG__FEATURE_INNER_CONTENT: dialogFeatureInnerContent
    }
  }
  const createWrapper = (className, resourcesGridWrapper) => {
    const wrapper = document.createElement('div')
    wrapper.className = className
    resourcesGridWrapper.appendChild(wrapper)
    return wrapper
  }
  /**
   * It takes an actor and a wrapper, and creates a wrapper for the actor's resources, and then creates
   * the HTML for the actor's resources
   * @param actor - The actor object
   * @param resourcesGridWrapper - The wrapper that will contain the resources.
   */
  function createActorWrapper(actor, resourcesGridWrapper) {
    const { data: actorData } = actor
    const {
      items: actorItems,
      data: {
        headers: { touchstones }
      }
    } = actorData

    const headerWrapper = createWrapper('header-wrapper', resourcesGridWrapper)
    const resourcesWrapper = createWrapper('resource-wrapper', resourcesGridWrapper)
    const featureWrapper = createWrapper('feature-wrapper hidden-content', resourcesGridWrapper)

    headerWrapper.innerHTML += (() => {
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

      return htmlElements(actor).DIALOG__HEADER_INNER_CONTENT(touchstonesList)
    })()

    resourcesWrapper.innerHTML += (() => {
      const {
        data: { health, willpower, humanity, hunger }
      } = actorData

      const createResourceList = actorResource => {
        const isDifferent = compare => actorResource[compare] !== undefined
        const resourceList = []
        let options = { count: 0, option: 1 }

        const getResourceState = {
          1: index =>
            actorResource.superficial > 0 && actorResource.superficial !== index && index < actorResource.superficial
              ? { dataIndex: index, dataState: '/' }
              : actorResource.aggravated > 0 &&
                actorResource.superficial + actorResource.aggravated !== index &&
                index < actorResource.superficial + actorResource.aggravated
              ? { dataIndex: index, dataState: 'x' }
              : { dataIndex: index, dataState: '' },
          2: index =>
            actorResource.value > index
              ? { dataIndex: index, dataState: '-' }
              : actorResource.stains > 0 &&
                actorResource.value + actorResource.stains !== index &&
                index < actorResource.value + actorResource.stains
              ? { dataIndex: index, dataState: '/' }
              : { dataIndex: index, dataState: '' },
          3: index =>
            index < actorResource ? { dataIndex: index, dataState: '-' } : { dataIndex: index, dataState: false }
        }

        isDifferent('max')
          ? (options = { count: actorResource.max, option: 1 })
          : isDifferent('stains')
          ? (options = { count: 10, option: 2 })
          : (options = { count: 5, option: 3 })

        for (let index = 0; index < options.count; index++) resourceList.push(getResourceState[options.option](index))
        return resourceList
      }

      const hungerStep = createResourceList(hunger.value)
      const healthStep = createResourceList(health)
      const willpowerStep = createResourceList(willpower)
      const humanityStep = createResourceList(humanity)

      return htmlElements(actor).DIALOG__RESOURCES_INNER_CONTENT(hungerStep, healthStep, willpowerStep, humanityStep)
    })()

    featureWrapper.innerHTML += (() => {
      const getFeatureType = type =>
        actorItems._source.filter(item => item.type === 'feature' && item.data.featuretype === type)
      const background = {
        name: getLanguage.background,
        content: getFeatureType('background')
      }
      const merit = {
        name: getLanguage.merit,
        content: getFeatureType('merit')
      }
      const flaw = {
        name: getLanguage.flaw,
        content: getFeatureType('flaw')
      }
      const featuresTypes = [background, merit, flaw]

      const { disciplines } = actorData.data
      const actorDisciplines = Object.fromEntries(Object.entries(disciplines).filter(([, value]) => value.visible))
      const actorPowers = actorItems.filter(item => item.type === 'power')
      Object.keys(actorDisciplines).forEach(discipline => {
        actorDisciplines[discipline].powers = actorPowers.filter(power =>
          actorDisciplines[discipline].name.toLowerCase().includes(power.data.data.discipline)
        )
      })
      return htmlElements(actor).DIALOG__FEATURE_INNER_CONTENT(actorDisciplines, featuresTypes)
    })()
  }

  /**
   * It creates a wrapper for the actor's resources and then creates the actor's wrapper
   * @param actor - The actor object that is being created.
   */
  /**
   * `composeDialog` creates a wrapper for the actor's resources and then calls `createActorWrapper` to
   * create the actor's wrapper.
   * @param actor - The actor object that is being created.
   */
  function composeDialog(actor) {
    const resourcesGridWrapper = createWrapper('resources grid-column', div)
    resourcesGridWrapper.id = actor.id
    createActorWrapper(actor, resourcesGridWrapper)
  }

  const gmFilter = actor => actor.type === 'vampire' || actor.type === 'character'
  const playerFilter = actor => gmFilter(actor) && actor.data.permission[game.userId] !== undefined
  const filter = game.user.isGM ? gmFilter : playerFilter
  game.actors.filter(actor => filter(actor)).forEach(actor => composeDialog(actor))

  const content = `
    <style>
      :root {
        --dialog-font-family: 'Playfair Display', serif !important;
        --dialog-primary: rgb(224, 221, 212);
        --dialog-primary-dark: rgb(204, 196, 175);
        --dialog-primary-light: #f2eee1;
        --dialog-primary-transparent: rgba(224, 221, 212, 0.8);
        --dialog-primary-transparent-dark: rgba(224, 221, 212, 0.96);
        --dialog-red-primary: #790813;
        --dialog-red-dark: #5a0813;
        --dialog-red-darker: #3c0813;
        --dialog-red-darkest: #30070c;
        --dialog-red-transparent: rgba(54, 29, 29, 0.8);
        --dialog-darkest: #000;
        --dialog-darker: #444;
        --dialog-dark: #888;
        --dialog-light: #ccc;
      }
      .tooltip {
        border-radius: 100%;
        position: absolute;
        top: 2px;
      }

      .tooltip-hide-content {
        z-index: 1000;
        visibility: hidden;
        opacity: 0;
        width: 300px;
        margin-top: 5px;
        box-shadow: 4px 4px 5px var(--dialog-dark);

        transition: all .4s;

        /* Position the tooltip */
        position: absolute;
        top: 11px;
      }

      .tooltip:hover .tooltip-hide-content {
        visibility: visible;
        opacity: 1;

        transition: all .3s;
      }

      .tooltip-label {
        display: flex;
        justify-content: center;
        width: 175px;
        font-size: 12px;
        font-weight: bold;
        color: var(--dialog-primary);
        background-color: var(--dialog-red-primary);
        padding: 2px 5px;
        border-radius: 5px 5px 0 0;
        top: -6px;
        left: 50px;
      }

      .bi-tooltip {
        color: var(--dialog-primary);
        cursor: pointer;
      }

      .bi-tooltip:hover {
        color: white;
      }

      .grid-column {
        border-bottom: 2px solid var(--dialog-light);
        margin-bottom: 5px;
        display: grid;
        grid-template-areas:
          'header header header'
          'feature feature feature';
      }

      .title-label {
        font-family: var(--dialog-font-family);
        font-weight: bold;
        font-size: 24px;
        color: var(--dialog-red-primary);
      }

      .is-rollable:hover {
        color: var(--dialog-light);
        text-shadow: 0 0 10px white;
        cursor: pointer;
      }

      .is-clickable {
        cursor: pointer;
        transition: all 0.3s ease-in;
      }

      .is-clickable:hover {
        color: var(--dialog-primary);
        text-shadow: 0 0 8px var(--dialog-red-primary);
        transition: all 0.3s ease-out;
      }

      .title {
        position: relative;
      }
      .title[position='right']::after {
        right: 0;
      }
      .title[position='left']::after {
        left: 0;
      }

      .title[data-title]::after {
        z-index: 10000;
        content: attr(data-title);
        position: absolute;
        top: -16px;
        right: 0;

        text-transform: uppercase;
        font-family: var(--dialog-font-family);
        font-weight: bold;
        font-size: 12px;

        font-size: 10px;
        color: var(--dialog-red-primary);
        background-color: var(--dialog-primary);
        box-shadow: -10px 10px 23px -3px rgba(0, 0, 0, 0.53);
        border-radius: 5px;
        padding: 3px;

        width: min-content;
        white-space: nowrap;
        overflow: visible;

        visibility: hidden;
        opacity: 0;
        transition: all 0.35s ease-in-out;
      }

      .body-monitor {
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
      }

      .title:hover::after {
        visibility: visible;
        opacity: 1;
        transition: all 1s ease-in-out;
      }

      .resources-counter {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    </style>
    <head>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" />
      <script type="text/javascript">
        document.getElementById('monitor-container').appendChild(div)
      </script>
    </head>
    <h1 class="title-label">Characters Monitor</h1>
    <body id="body" class="body-monitor">
      <div id="monitor-container"></div>
    </body>
  `
  const dialog = new Dialog({
    allowMaximize: true,
    width: 600,
    title: 'Monitor',
    content,
    buttons: {}
  })

  const container = document.getElementById('monitor-container')

  if (!container) dialog.render(true)

  // onUpdateActor(actor, updateData, options, userId)
  Hooks.on('updateActor', actor => {
    const dialogElement = document.getElementById(actor.id)
    dialogElement.innerHTML = ''
    createActorWrapper(actor, dialogElement)
  })
}
