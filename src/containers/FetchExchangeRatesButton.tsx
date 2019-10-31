import { connect } from 'react-redux'
import { updateExchangeRates, setIsLoading, setInErrorState } from '../store/actions/exchangeRates'
import Button from '../components/Button'
import { getRates } from  '../helpers/http/exchange'
import { Modal } from 'antd'

const mapDispatchToProps = (dispatch : Function) => {
  return {
    onClick: () => {
        dispatch(setInErrorState(false))
        dispatch(setIsLoading(true))
        getRates().then(ratesResponse => {
            const { rates } = ratesResponse
            dispatch(updateExchangeRates(rates))
        }).catch(() => {
            dispatch(setInErrorState(true))
            Modal.error({
              title: 'Error',
              content: 'We were unable to retreive the exchange rates',
            });
        }).finally(() => {
            dispatch(setIsLoading(false))
        })
    }
  }
}

const FetchExchangeRatesButton = connect(
  null,
  mapDispatchToProps
)(Button)

export default FetchExchangeRatesButton