import { membersDummy, teamsDummy } from 'data'
import { AnyAction } from 'redux'
import { ADD_JOB } from 'store/actionTypes'

const initialState: TakeHome.DataState = {
  teams: teamsDummy,
  members: membersDummy,
  jobs: []
}

export default function data(state = initialState, action: AnyAction) {
  switch (action.type) {
    case ADD_JOB: {
      const { job } = action.payload
      return {
        ...state,
        jobs: [...state.jobs, job]
      }
    }
    default:
      return state
  }
}