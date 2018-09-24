import { LOGIN, LOGOUT, ADD_CHARACTER, CHANGE_USER_LEVEL } from 'actions';

const testCampaigns = [
    {
        campaignName: 'Rhedrah',
        players: [
            'nlhowell12',
            'robcgabbard',
            'ajestes07'
        ],
        DM: 'ajestes07',
        system: '3.5e',
        characters: [
            {
                name: "Kyrin",
                player: "Nick"
            }
        ]
    },
    {
        campaignName: 'Fimbulwinter',
        players: [
            'nlhowell12',
            'siderybo'
        ],
        DM: 'mjmoore',
        system: '5e',
        characters: [

        ]
    }
]

export const userState = {
    username: 'nlhowell12',
    campaigns: testCampaigns,
    email: 'nlhowell12@gmail.com'
}

export default (state = userState, action) => {
    switch(action.type) {
        case LOGIN:
            return state
        case LOGOUT:
            return {...state, username: ''}
        case ADD_CHARACTER:
            return state
        case CHANGE_USER_LEVEL:
            return state
        default:
            return state
    }
}