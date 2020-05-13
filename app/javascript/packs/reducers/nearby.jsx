import {
  NEARBY_COMBOS_TOGGLE
} from '../helper/types'

const initState = {
  body: '',
  script: ''
}

export default (state = initState, action) => {
  const { type, payload } = action
  if (type === NEARBY_COMBOS_TOGGLE) {
    return {
      ...state,
      body: payload.data,
      script: payload.script
    }
  }
  return state
}