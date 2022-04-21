import * as ACTION_TYPES from './actionTypes'

export const setCurrentMenu = (menu: string) => ({
  type: ACTION_TYPES.SET_CURRENT_MENU,
  payload: { menu }
})

export const addJob = (job: TakeHome.JobData) => ({
  type: ACTION_TYPES.ADD_JOB,
  payload: { job }
})