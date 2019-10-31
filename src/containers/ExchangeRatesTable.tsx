import { connect } from 'react-redux'
import Table from '../components/Table'

interface MapStateToPropsState {
    ratesInformation: Array<any>,
    isLoading: boolean,
}

const EXCHANGE_RATE_TABLE_COLUMNS = [
        {
          title: 'Currency',
          dataIndex: 'currency',
          key: 'currency',
        },
        {
          title: 'Rate',
          dataIndex: 'rate',
          key: 'rate',
        },
]


const mapStateToProps = (state: MapStateToPropsState) => {
  return {
    dataSource: state.ratesInformation,
    columns: EXCHANGE_RATE_TABLE_COLUMNS,
    isLoading: state.isLoading,
  }
} 

const ExchangeRatesTable = connect(
    mapStateToProps,
    null
)(Table)

export default ExchangeRatesTable