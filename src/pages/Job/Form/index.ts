import { connect } from 'react-redux'
import { addJob, editJob } from 'store/actions'
import JobForm from './JobForm'

const mapStateToProps = (state: TakeHome.StoreState) => ({
  members: state.data.members,
  jobs: state.data.jobs,
  newID: state.data.maxJobID
})

const mapDispatchToProps = {
  addJob,
  editJob
}

export default connect(mapStateToProps, mapDispatchToProps)(JobForm)