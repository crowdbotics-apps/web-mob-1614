import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth100Reducer from '../features/EmailAuth100/redux/reducers';
import EmailAuth99Reducer from '../features/EmailAuth99/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth100: EmailAuth100Reducer,
EmailAuth99: EmailAuth99Reducer,
EmailAuth: EmailAuthReducer,

});