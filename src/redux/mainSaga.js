import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth100Saga from '../features/EmailAuth100/redux/sagas';
import EmailAuth99Saga from '../features/EmailAuth99/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth100Saga,
EmailAuth99Saga,
EmailAuthSaga,
    
  ]);
}