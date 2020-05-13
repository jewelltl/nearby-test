import regeneratorRuntime from 'regenerator-runtime'
import { put, takeLatest, call } from 'redux-saga/effects'
import request from '../helper/request'

import {
  LOAD_NEARBY_COMBOS,
  NEARBY_COMBOS_TOGGLE
} from '../helper/types'

function* loadNearbyCombos({data}) {
  let res
  try {
    res = yield call(
      request.get,
      '/nearbycombo'
    )
  } catch (err) {
    console.log(err)
  } finally {
    if (res) {
      yield put({
        type: NEARBY_COMBOS_TOGGLE,
        payload: {
          ...res.data
        }
      })
      data.cb && data.cb(res.data)
    }
  }
}

export function* nearby() {
  yield takeLatest(LOAD_NEARBY_COMBOS, loadNearbyCombos)
}