import regeneratorRuntime from 'regenerator-runtime'
import { all } from 'redux-saga/effects'
import { nearby } from './nearby'

export default function* rootSaga() {
  yield all([
    nearby()
  ])
}
