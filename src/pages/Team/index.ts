import { connect } from 'react-redux'
import Team from './Team'

const mapStateToProps = (state: TakeHome.StoreState) => ({
  teams: state.data.teams
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Team)