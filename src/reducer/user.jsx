import { LOGIN, ADD_CHARACTER, CHANGE_USER_LEVEL } from 'actions';

const testCampaigns = [
    {
        campaignName: 'Rhedrah',
        players: [
            'nlhowell12',
            'robcgabbard',
            'ajestes07'
        ],
        DM: 'ajestes07'
    },
    {
        campaignName: 'Fimbulwinter',
        players: [
            'nlhowell12',
            'siderybo'
        ],
        DM: 'mjmoore'
    }
]

export const userState = {
    username: '',
    campaigns: testCampaigns,
    email: ''
}

export default (state = userState, action) => {
    switch(action.type) {
        case LOGIN:
            return state
        case ADD_CHARACTER:
            return state
        case CHANGE_USER_LEVEL:
            return state
        default:
            return state
    }
}