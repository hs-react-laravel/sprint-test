import * as ACTION_TYPES from './actionTypes'

export const setCurrentMenu = (menu: string) => ({
  type: ACTION_TYPES.SET_CURRENT_MENU,
  payload: { menu }
})

export const addJob = (job: TakeHome.JobData) => ({
  type: ACTION_TYPES.ADD_JOB,
  payload: { job }
})

export const editJob = (job: TakeHome.JobData) => ({
  type: ACTION_TYPES.EDIT_JOB,
  payload: { job }
})

export const deleteJob = (job: TakeHome.JobData) => ({
  type: ACTION_TYPES.DELETE_JOB,
  payload: { job }
})