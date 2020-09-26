import {
    GET_COUNTRY_CASES,
    GET_WORLD_CASES,
    SET_COUNTRY_LIST,
    SET_IP_COUNTRY,
    SET_LOADING,
    SET_COUNTRY
} from '../types';

export default (state, action) => {

    switch (action.type) {
        case SET_IP_COUNTRY:
            return {
                ...state,
                country: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_COUNTRY_CASES:
            return {
                ...state,
                cTotalCases: action.payload.totalCases,
                cRecovCases: action.payload.recovCases,
                cDeathCases: action.payload.deathCases,
                cNewCases: action.payload.newCases,
                loading: false
            }
        case GET_WORLD_CASES:
            return {
                ...state,
                wTotalCases: action.payload.totalCases,
                wRecovCases: action.payload.recovCases,
                wDeathCases: action.payload.deathCases,
                wNewCases: action.payload.newCases,
                loading: false
            }
        case SET_COUNTRY_LIST:
            return {
                ...state,
                countryArray: action.payload,
                loading: false
            }
        case SET_COUNTRY:
            return {
                ...state,
                iTotalCases: action.payload.totalCases,
                iRecovCases: action.payload.recovCases,
                iDeathCases: action.payload.deathCases,
                iActiveCases: action.payload.activeCases,
                loading: false
            }
        default:
            return state;
    }
}                    