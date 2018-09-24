

const newCharState = {
    name: '',
    player: '',
    world: '',
    classes: [],
    race: '',
    deity: '',
    age: '',
    eyes: '',
    hair: '',
    skin: '',
    attributes: {
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0
    },
    skills: {
        acrobatics: 0,
        artifice: 0,
        autohypnosis: 0,
        bluff: 0,
        climb: 0,
        concentration: 0,
        craft: [],
        decipherScript: 0,
        diplomacy: 0,
        disguise: 0,
        escapeArtist: 0,
        forgery: 0,
        handleAnimal: 0,
        heal: 0,
        intimidate: 0,
        knowledge: [
            {arcana: 0},
            {architectureEngineering: 0},
            {dungeoneering: 0},
            {history: 0}, 
            {local: 0},
            {nature: 0},
            {nobilityRoyalty: 0},
            {psionics: 0},
            {militaryTactics: 0},
            {religion: 0},
            {thePlanes: 0}
        ],
        magecraft: 0,
        perception: 0,
        perform: [],
        ride: 0,
        senseMotive: 0,
        sleightOfHand: 0,
        speakLanguage: [],
        stealth: 0,
        survival: 0,
        swim: 0,
        useRope: 0,
    },
    feats: []
}

export default (state = newCharState, action) => {
    switch(action.type) {
        default:
            return state
    }
}