import { AnyAction } from 'redux'
import { SET_CURRENT_MENU } from 'store/actionTypes'

const initialState: TakeHome.UIState = {
  menu: ''
}

export default function ui(state = initialState, action: AnyAction) {
  switch (action.type) {
    case SET_CURRENT_MENU: {
      const { menu } = action.payload
      return {
        ...state,
        menu: menu
      }
    }
    default:
      return state
  }
}