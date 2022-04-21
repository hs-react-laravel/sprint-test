import { membersDummy, teamsDummy } from 'data'
import { AnyAction } from 'redux'
import { ADD_JOB, EDIT_JOB, DELETE_JOB } from 'store/actionTypes'

const initialState: TakeHome.DataState = {
  teams: teamsDummy,
  members: membersDummy,
  jobs: [],
  maxJobID: 1,
}

export default function data(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_JOB: {
      const { job } = action.payload
      return {
        ...state,
        jobs: [...state.jobs, job],
        maxJobID: state.maxJobID + 1
      }
    }
    case EDIT_JOB: {
      const { job } = action.payload
      const updatedJobs = state.jobs.map(j => j.id === job.id ? job : j)
      return {
        ...state,
        jobs: updatedJobs
      }
    }
    case DELETE_JOB: {
      const { job } = action.payload
      console.log(state.jobs, job, state.jobs.filter(j => j.id !== job.id))
      const updatedJobs = state.jobs.filter(j => j.id !== job.id)
      return {
        ...state,
        jobs: updatedJobs
      }
    }
    default:
      return state
  }
}