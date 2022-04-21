import { connect } from 'react-redux'
import Member from './Member'

const mapStateToProps = (state: TakeHome.StoreState) => ({
  members: state.data.members
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Member)