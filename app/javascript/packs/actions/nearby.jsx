import {
  LOAD_NEARBY_COMBOS
} from '../helper/types'

export const loadNearbyCombos = data => ({
  type: LOAD_NEARBY_COMBOS,
  data: data
})