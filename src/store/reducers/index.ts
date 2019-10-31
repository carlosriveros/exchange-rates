import { UPDATE_EXCHANGE_RATES, SET_IS_LOADING, SET_IN_ERROR_STATE } from '../actions/exchangeRates'

interface State {
    ratesInformation: Array<object>,
    isLoading: boolean,
    isInErrorMode: boolean,
}

const reducer = (state : State =  {ratesInformation: [], isLoading: false, isInErrorMode: false}, action: any) => {
    switch(action.type) {
        case UPDATE_EXCHANGE_RATES: {
            const exchangeRatesArray = Object.keys(action.action).map(k => {
                return {
                    currency: k,
                    rate: action.action[k],
                    key: k
                }
            })
            return { ...state , ...{ratesInformation: exchangeRatesArray}}
        }
        case SET_IS_LOADING: {
            return { ...state , ...{isLoading: action.action}}
        }
        case SET_IN_ERROR_STATE: {
            return { ...state , ...{isInErrorMode: action.action}}
        }
        default:
                return state
    }
}

export default reducer