import { connect } from 'react-redux'
import { deleteJob } from 'store/actions'
import JobList from './JobList'

const mapStateToProps = (state: TakeHome.StoreState) => ({
  jobs: state.data.jobs
})

const mapDispatchToProps = {
  deleteJob
}

export default connect(mapStateToProps, mapDispatchToProps)(JobList)