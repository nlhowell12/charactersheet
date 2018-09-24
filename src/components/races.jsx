export const playerRaces = [
    {
        race: "Dromite",
        attributes: {
            charisma: 2,
            strength: -2,
            wisdom: -2
        },
        size: 'Small',
        speed: {
            land: 20,
            climb: 20
        },
        special: {
            naturalArmor: 3,
            energyType: ['cold', 'electricity', 'fire', 'sonic'],
            psionic: 1,
            scent: 20,
            resistance: 5,
            energyRay: '1/day'
        },
        skills: {
            perception: 2
        },
        feats: [ "Blind-Fight" ],
        favoredClass: 'Psion',
        languages: ["Dromish", "Caste Sub-Language"]
    },
    {
        race: "Dwarf",
        attributes: {
            constitution: 2,
            charisma: -2
        },
        size: "Medium",
        speed: {
            land: 20
        },
        special: {
            "Darkvision": 60,
            "Stonecunning": "+2 Perception to notice unusual stonework, automatic check.",
            "Spell Resistance": '+2 racial bonus on saving throws vs spells.',
            "Poison Resistance": '+2 racial bonus on saving throws vs poison.',
            "Stability": '+4 bonus to resist Bull Rush and Trip.',
            "Enemy Familiarity": '+1 racial attack bonus vs Orcs, Half-Orcs, and Goblinoids.',
            "Giant Familiarity": '+4 dodge bonus vs Giant type monsters.  If you lose Dex, you also lose this.',
            "Artifice": '+2 racial bonus on Artifice checks involiving stone or metal',
            "Dwarven Crafting": '+2 racial bonus on Craft checks involving stone or metal'
        },
        feats: ["Toughness", "Bonus: Combative"],
        languages: ["Dwarven", "Calishite"],
        bonusLanguage: ["Cormyrian", "Giant", "Gnomish", "Goblin", "Halfing", "Orc", "Terran"],
        favoredClass: "Fighter"
    },
    {
        race: "Elf",
    },
    {
        race: "Gnomes",
    },
    {
        race: "Half-Elf",
    },
    {
        race: "Halflings",
    },
    {
        race: "Half-Orcs",
    },
    {
        race: "Humans",
    },
    {
        race: "Xephs",
    }
]

export const monsterRaces = [

]